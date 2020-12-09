<template>
  <div id="cns-cred">

    <v-card
      elevation="24"
      class="mx-auto"
      outlined
      rounded
      dark
      colorxxx="light-blue darken-3"
      imgxx="https://www.wallpaperflare.com/static/930/175/684/circles-highlights-background-form-wallpaper-preview.jpg"
      img="https://cdn.pixabay.com/photo/2015/08/18/10/42/form-893708_960_720.jpg"
    >

      <v-card-title>
        <p class="font-weight-black">
          ¡Consulta tu Crédito!
        </p>
      </v-card-title>

      <v-divider></v-divider>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >

        <v-text-field
          v-model="form['dni']"
          class="py-5"
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
          filled
          required
          rounded
          outlined
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          small
          color="success"
          class="mr-4"
          @click="submitForm"
          rounded
        >
          Consultar
        </v-btn>

        <v-btn
          color="error"
          small
          class="mr-4"
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