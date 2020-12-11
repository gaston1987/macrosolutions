<template>
  <div id="cns-cred" style="margin-top:50px; margin-bottom:30px; ">

    <v-card
      elevation=20
      class="mx-auto"
      outlined
      rounded
      width="80%"
      mt-20
      dark
      colorxxx="light-blue darken-3"
      imgxx="https://www.wallpaperflare.com/static/930/175/684/circles-highlights-background-form-wallpaper-preview.jpg"
      img="https://cdn.pixabay.com/photo/2015/08/18/10/42/form-893708_960_720.jpg"
    >

      <v-card-title>
        <h2 >
          ¡Consulta tu Crédito!
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
          :rules="nameRules"
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
          class="mr-4 mb-10 ml-5"
          @click="submitForm"
          rounded
        >
          Consultar
        </v-btn>

        <v-btn
          color="error"
          small
          class="mr-4 mb-10"
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