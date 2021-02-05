<template>
  <div
    id="cns-cred"
    style="margin-top:50px; margin-bottom:50px; "
  >

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
        color="#2C1F77"
        dark
      >
        <v-spacer></v-spacer>
      </v-system-bar>
      <v-card-title
        class="text-center font-weight-black"
        background-color="#2C1F77"
      >
        ¡Consulta tu Crédito!
        <v-icon style="color:#2C1F77; padding-left:5px; font-size:40px">mdi-file-find</v-icon>

      </v-card-title>

      <v-divider></v-divider>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >

        <v-text-field
          v-model="form['dni']"
          :counter="8"
          :rules="dniRules"
          type="number"
          label="Nro.DNI."
          clearable
          filled
          required
          class="pr-10 pl-10 py-10"
        ></v-text-field>

        <v-text-field
          v-model="form['name']"
          dense
          :rules="nameRules"
          label="Apellido y Nombre"
          clearable
          filled
          required
          class="pr-10 pl-10"
        ></v-text-field>

        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="form['tel_area']"
              label="Cod.Area"
              type="number"
              dense
              prefix="+54 - 0"
              clearable
              required
              class="pr-10 pl-10"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="form['tel_nro']"
              type="number"
              dense
              label="Nro.Celular"
              prefix="15"
              clearable
              required
              class="pr-10 pl-10"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-text-field
          v-model="form['email']"
          dense
          :rules="emailRules"
          label="E-mail"
          clearable
          filled
          required
          class="pr-10 pl-10"
        ></v-text-field>
        <v-row
          align="center"
          justify="center"
        >
          <v-btn
            :disabled="!valid"
            :small="$vuetify.breakpoint.mobile"
            color="success"
            @click="submitForm"
            rounded
          >
            Consultar
          </v-btn>

          <v-btn
            color="error"
            :small="$vuetify.breakpoint.mobile"
            @click="reset"
            rounded
          >
            Cancelar
          </v-btn>
        </v-row>

      </v-form>
      <v-dialog
        v-model="dialog"
        hide-overlay
        persistent
        width="300"
      >
        <v-card
          color="primary"
          dark
        >
          <v-card-text>
            Por favor espere
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="conf"
        hide-overlay
        persistent
        width="300"
      >
        <v-card
          color="success"
          dark
        >
          <v-card-title>
            Mensaje enviado con exito!

          </v-card-title>
          <v-card-text>
            Muchas gracias por su consulta, en breve un asesor se comunicará con usted por alguno de los medios brindados

          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="conf = false"
            >
              Cerrar
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-card>

  </div>
</template>
<script>

export default {
  name: 'cns_cred',
  data () {

    return {

      form: {
        dni: '',
        name: '',
        tel_area: '',
        tel_nro: '',
        email: ''
      },
      dialog: false,
      conf: false,
      valid: true,
      dniRules: [
        v => !!v || 'El campo DNI es Obligatorio',
        v => (v && v.length >= 7) || 'La longitud del DNI debe ser mayor a 7 digitos',
        v => (v && v.length > 0) || 'El DNI debe ser mayor a 0',
      ],
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail debe ser válido',
      ],
      nameRules: [
        v => !!v || 'Nombre es requerido',
        v => (v && v.length >= 10) || 'La longitud del nombre debe ser mayor a 10 caracteres',
      ],
    }
  },

  methods: {

    submitForm () {
      if (!this.$refs.form.validate()) {
        return
      }
      this.dialog = true

      this.sendEmail()

    },

    sendEmail () {
      this.$loadScript("https://smtpjs.com/v3/smtp.js")
        .then(() => {                                         //this Promise return nothing!!!
          window.Email && window.Email.send({
            Host: "mail.macrosolutions.com.ar",
            Username: "web@macrosolutions.com.ar",
            Password: "Dkno198000",
            //SecureToken: "82b06d19-25c4-451d-a485-df6822ea67f8",            
            To: 'administracion@macrosolutions.com.ar',
            From: "web@macrosolutions.com.ar",
            Subject: "Consulta Credito DNI:" + this.form.dni,
            Body: `<html>
                   <table style="border: 1px solid black">
                   <tr>
                   <td><strong>DNI:</strong></td>
                   <td>"${this.form.dni}"</td>
                   </tr>
                   <tr>
                   <td><strong>Apellido y Nombre:</strong></td>
                   <td>"${this.form.name}"</td>
                   </tr>
                   <tr>
                   <td><strong>Telefono:</strong></td>
                   <td>"${this.form.tel_area}-${this.form.tel_nro}"</td>
                   </tr>
                   <tr>
                   <td><strong>Email:</strong></td>
                   <td>"${this.form.email}"</td>
                   </tr>
                   </table>
                   </html>
                   `
          }).then(() => {
            this.dialog = false
            this.conf = true
            this.reset()
          }
          );
        })
        .catch((e) => {
          alert(e)
          this.dialog = false
          // Failed to fetch script
        })
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
#cns-cred {
  font-family: "Nunito" !important;
}
</style>