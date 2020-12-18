<template>
  <div id="cns-cred" style="margin-top:50px; margin-bottom:50px; ">

    <v-card
      elevation=20
      id="cnscard"
      class="mx-auto mb-20"
      outlined
      rounded
      width="80%"
      mt-20
      light
    >
  <v-system-bar
        color="pink darken-2"
        dark
      >
        <v-spacer></v-spacer>
      </v-system-bar>
      <v-card-title
      background-color="primary"
      colo
      >
        <h2 >
        <strong>  ¡Consulta tu Crédito! </strong>  <v-icon style="color:rgb(216, 27, 96); padding-left:5px; font-size:40px">mdi-file-find</v-icon>
        
        </h2>
      </v-card-title>

      <v-divider></v-divider>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >

        <v-text-field
          v-model="form['dni']"
          class="pa-5"
          dense
          :counter="8"
          type="number"
          label="Nro.DNI."
          clearable
          filled
          required
          rounded
          outlined
        ></v-text-field>

        <v-text-field
          v-model="form['credito']"
          dense
          label="Nro.Credito"
          clearable
          class="pa-5"
          filled
          required
          rounded
          outlined
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          small
          color="success"
          class="mr-4 mb-10 ml-5 pa-5"
          @click="submitForm"
          rounded
        >
          Consultar
        </v-btn>

        <v-btn
          color="error"
          small
          class="mr-4 mb-10 pa-5"
          @click="reset"
          rounded
        >
          Cancelar
        </v-btn>

      </v-form>
    </v-card>

  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'cns_cred',
  data () {

    return {

      form: {
        dni: '',
        credito: ''
      },
      valid: true,
    }
  },

  methods: {

    submitForm () {
      if (!this.$refs.form.validate()) {
        return
      }

      this.valid = true
      axios.post('/contact', this.form)
        .then((res) => {
          alert(res)
          //Perform Success Action
        })
        .catch((error) => {
          alert(error)
          // error.response.status Check status code
        }).finally(() => {
          //Perform action in always
        });
    },

    sendEmail () {
      this.$loadScript("https://smtpjs.com/v3/smtp.js")
        .then(Email => {                                         //this Promise return nothing!!!
          Email.send({
            Host: "smtp.gmail.com",
            Username: "pepe80",
            Password: "password",
            To: 'them@website.com',
            From: "you@isp.com",
            Subject: "This is the subject",
            Body: "And this is the body"
          }).then(
            message => alert(message)
          );
        })
        .catch(() => {
          // Failed to fetch script
        });

    },


    reset () {
      this.$refs.form.reset()
    },

    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style>

#cns-cred{

    font-family: "Nunito" !important; 
    
}

</style>