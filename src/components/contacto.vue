<template>
  <div id="contacto">

    <v-row justify="center">
      <v-col
        flat
        class="col-md-5 col-xs-12 col-sm-12  offset-md-1"
      >
        <v-card flat>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0539735026796!2d-58.37322388484934!3d-34.60279666495628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33532cf4f7049%3A0xf99b0dbe84a50b6d!2s25+de+Mayo+431%2C+C1002ABI+CABA!5e0!3m2!1ses!2sar!4v1506382137560"
              style="border:0; margin-top:10px"
              width="100%"
              height="440px"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>

            <p style="text-align:center; margin-top:30px">
              <v-icon style="color:#1976d2; padding:10px; font-size:30px">mdi-office-building-marker-outline</v-icon>
              <b> 25 de Mayo 431, Piso 3, of. F </b>
            </p>
            <p style="text-align:center">
              <v-icon style="color:#1976d2; padding:10px; font-size:30px">mdi-phone-forward-outline</v-icon>
              <b> Tel: +54 11 52527626 </b>
            </p>
          </div>

        </v-card>

      </v-col>

      <v-col class="col-md-6 col-xs-12 col-sm-12  offset-md-0">
        <div
          id="form-contact"
          style="margin-top:5px; margin-bottom:50px !important; "
        >

          <v-card
            elevation=20
            id="cnscard"
            class="mx-auto pb-20"
            outlined
            rounded
            width="80%"
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
        </div>
      </v-col>
    </v-row>

  </div>

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
            To: 'administracion@macrosolutions.com.ar',
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
</style>
