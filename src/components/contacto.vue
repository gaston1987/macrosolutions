<template>
  <v-container dense>
    <div
      id="contacto"
      style="margin-top:50px; margin-bottom:50px; "
    >

      <v-card
        elevation=20
        id="cnscard"
        class="mx-auto mb-20"
        outlined
        rounded
        width="100%"
        mt-20
        light
      >

        <v-card
          elevation=20
          id="cnscard"
          class="mx-auto pb-20"
          outlined
          rounded
          width="100%"
          mt-20
          light
          pb-5
        >

          <v-toolbar
            color="#007ebf"
            cards
            dark
            flat
          >
            <v-icon style="#007ebf;  font-size:40px;">mdi-account-box-outline</v-icon>
            <v-card-title
              class="font-weight-black"
              style="min-width:300px"
            >
              Contáctenos

            </v-card-title>
            <v-spacer></v-spacer>

          </v-toolbar>

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
              required
              class="pr-10 pl-10 py-10"
            ></v-text-field>

            <v-text-field
              v-model="form['name']"
              dense
              :rules="nameRules"
              label="Apellido y Nombre"
              clearable
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
              required
              class="pr-10 pl-10"
            ></v-text-field>

            <v-combobox
              class="pr-10 pl-10"
              label="Motivo?"
              clearable
              multiple
              small-chips
              v-model="form['motivo']"
              :items="items"
              :rules="selectRules"
              required
            >
            </v-combobox>
            <v-textarea
              v-model="form.desMotivo"
              color="teal"
              class="pr-10 pl-10"
            >
              <template v-slot:label>
                <div>
                  Describinos tu consulta <small>(opcional)</small>
                </div>
              </template>
            </v-textarea>
            <v-row
              align="center"
              justify="center"
              mb-5
              style="margin-bottom:20px"
            >
              <v-btn
                :disabled="!valid"
                :small="$vuetify.breakpoint.mobile"
                color="primary"
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
                Enviando...
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
              color="#007ebf"
              dark
            >
              <v-card-title>
                Mensaje enviado con exito!

              </v-card-title>
              <v-card-text>
                Muchas gracias por su consulta, en breve un asesor se comunicará con usted.

              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="white"
                  text
                  @click="conf = false"
                >
                  Cerrar
                </v-btn>

              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-card>
    </div>

  </v-container>
</template>


<script>
export default {
  name: 'contacto',
  data () {

    return {

      form: {
        dni: '',
        name: '',
        tel_area: '',
        tel_nro: '',
        email: '',
        motivo: '',
        desMotivo: '',
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
      selectRules: [
        v => !!v || 'Motivo es requerido',],
      items: [
        'Quiero activar el botón de arrepentimiento',
        'Quiero activar el botón de baja y cancelar el crédito',
        'Quiero que me manden una copia de la solicitud de crédito',
        'Quiero que me manden el cronograma de pagos y el saldo de deuda',
        'Quiero hacer una consulta',
        'Quiero hacer un reclamo',
        'Otros: Aclarar',
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
            //To: 'administracion@macrosolutions.com.ar',
            To: 'clientes@macrosolutions.com.ar',
            From: "web@macrosolutions.com.ar",
            Subject: "Solicitud de Contacto:" + this.form.name,
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
                   <tr>
                   <td><strong>Motivo:</strong></td>
                   <td>"${this.form.motivo}"</td>
                   </tr>
                   <tr>
                   <td><strong>Motivo:</strong></td>
                   <td>"${this.form.desMotivo}"</td>
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

<style scoped>
#contacto {
  width: 95% !important;
}

#form-contact {
  font-family: "Nunito" !important;
}

#cns-cred {
  font-family: "Nunito" !important;
}
</style>
