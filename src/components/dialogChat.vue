
 <template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="amber darken-2"
          dark
          v-bind="attrs"
          v-on="on"
          fab
          id="botw"
        >
          <v-icon>mdi-android-messages</v-icon>
        </v-btn>

      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIOt7XY-8McijLKAL5xBZeYJJdXa1dI0vmg&usqp=CAU"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>MACROSOLUTIONS</v-list-item-title>
              <v-list-item-subtitle>en línea</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                :class="fav ? 'green--text' : ''"
                icon
              >
                <v-icon>mdi-face-agent</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-container>
            <v-card
              elevation="3"
              outlined
              shaped
              width="auto"
              color="white"
            >
              <v-card-text>
                <p
                  class="font-weight-black"
                  style="max-width: 20rem;"
                > 👋 Hola!, soy Maca tu asistente virtual.
                  Tengo un equipo Macrosolutions que me está enseñando para poder ayudarte cada vez mejor.
                  Y también podemos conversar sobre los siguientes temas:
                  ¿Con cuál te puedo ayudar?</p>
              </v-card-text>
            </v-card>
          </v-container>
          <v-divider></v-divider>
          <v-dialog
            v-model="dialog3"
            width="700"
          >

            <template v-slot:activator="{ on, attrs }">
              <v-list-item
                link
                v-bind="attrs"
                v-on="on"
              >
                <v-list-item-action>
                  <v-icon>mdi-clipboard-search-outline</v-icon>
                </v-list-item-action>
                <v-list-item-title>CONSULTAS DE TRAMITES</v-list-item-title>
              </v-list-item>
            </template>
            <v-card>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIOt7XY-8McijLKAL5xBZeYJJdXa1dI0vmg&usqp=CAU"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>MACROSOLUTIONS</v-list-item-title>
                  <v-list-item-subtitle>en línea</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn
                    :class="fav ? 'green--text' : ''"
                    icon
                  >
                    <v-icon>mdi-face-agent</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-divider></v-divider>

              <v-container>
                <v-card
                  elevation="3"
                  outlined
                  shaped
                  width="auto"
                  color="white"
                >
                  <v-card-text>
                    <p
                      class="font-weight-black"
                      style="max-width: 40rem;"
                    > 📑 En esta sección, podés ingresar tus datos y consultar el estado de tus créditos.</p>
                  </v-card-text>
                </v-card>
              </v-container>
              <div
                id="cns-cred"
                style="margin-top:20px; margin-bottom:30px; "
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
                    color="pink darken-2"
                    dark
                  >
                    <v-spacer></v-spacer>
                  </v-system-bar>
                  <v-card-title
                    background-color="primary"
                    colo
                  >
                    <h2>
                      <strong> ¡Consulta tu Crédito! </strong>
                      <v-icon style="color:rgb(216, 27, 96); padding-left:5px; font-size:40px">mdi-file-find</v-icon>

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

                    <v-btn
                      :disabled="!valid"
                      small
                      color="success"
                      class="ml-10 mb-10 ml-5 pa-5"
                      @click="submitForm"
                      rounded
                    >
                      Consultar
                    </v-btn>

                    <v-btn
                      color="error"
                      small
                      class="ml-10 mb-10 pa-5"
                      @click="reset"
                      rounded
                    >
                      Cancelar
                    </v-btn>

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

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  Cerrar
                </v-btn>
              </v-card-actions>
            </v-card>

          </v-dialog>
        </v-list>
        <v-list-item
          link
          @click="onSimu"
        >
          <v-list-item-action>
            <v-icon>mdi-currency-usd</v-icon>
          </v-list-item-action>
          <v-list-item-title>SIMULADOR DE CREDITOS</v-list-item-title>
        </v-list-item>

        <v-dialog
          v-model="dialog4"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              link
              v-bind="attrs"
              v-on="on"
            >
              <v-list-item-action>
                <v-icon>mdi-newspaper-variant-outline</v-icon>
              </v-list-item-action>
              <v-list-item-title>REQUISITOS</v-list-item-title>

            </v-list-item>
          </template>
          <v-card>

            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIOt7XY-8McijLKAL5xBZeYJJdXa1dI0vmg&usqp=CAU"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>MACROSOLUTIONS</v-list-item-title>
                <v-list-item-subtitle>en línea</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn
                  :class="fav ? 'green--text' : ''"
                  icon
                >
                  <v-icon>mdi-face-agent</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-container>
              <v-card
                elevation="3"
                outlined
                shaped
                width="auto"
                color="white"
              >
                <v-card-text>
                  <p
                    class="font-weight-black"
                    style="max-width: 40rem;"
                  > 📋 Los requisitos para obtener un crédito son los siguientes:</p>
                </v-card-text>
              </v-card>
            </v-container>
            <v-divider></v-divider>
            <v-list-item>

              <v-list-item-action>
                <v-icon>mdi-card-account-details-outline</v-icon>
              </v-list-item-action>
              <v-list-item-title>FOTOCOPIA DEL DNI</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-file-document-multiple-outline</v-icon>
              </v-list-item-action>
              <v-list-item-title>ULTIMOS 3 RECIBOS DE SUELDO</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-file-outline</v-icon>
              </v-list-item-action>
              <v-list-item-title>BOLETA DE SERVICIO</v-list-item-title>
            </v-list-item>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="dialog4 = false"
              >
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog
          v-model="dialog2"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              link
              v-bind="attrs"
              v-on="on"
            >
              <v-list-item-action>
                <v-icon>mdi-clock-time-nine-outline</v-icon>
              </v-list-item-action>
              <v-list-item-title>HORARIOS</v-list-item-title>
            </v-list-item>
          </template>
          <v-card>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIOt7XY-8McijLKAL5xBZeYJJdXa1dI0vmg&usqp=CAU"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>MACROSOLUTIONS</v-list-item-title>
                <v-list-item-subtitle>en línea</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn
                  :class="fav ? 'green--text' : ''"
                  icon
                >
                  <v-icon>mdi-face-agent</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-container>
              <v-card
                elevation="3"
                outlined
                shaped
                width="auto"
                color="white"
              >
                <v-card-text>
                  <p
                    class="font-weight-black"
                    style="max-width: 40rem;"
                  > 🕘 Nuestros horarios de atención son los siguientes:</p>
                </v-card-text>
              </v-card>
            </v-container>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-clock-outline</v-icon>
              </v-list-item-action>

              <v-list-item-title>LUNES A VIERNES DE 9hs a 18hs</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="dialog2 = false"
              >
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-card-actions>
          <v-spacer></v-spacer>

        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'dialogChat',
  data () {
    return {

      fav: true,
      menu: false,
      message: false,
      hints: true,
      dialog: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      form: {
        dni: '',
        name: '',
        tel_area: '',
        tel_nro: '',
        email: ''
      },
      valid: true,
      conf: false,
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

    onSimu () {
      // eslint-disable-next-line no-console
      console.log(['onSimu)'])
      this.$router.push({ name: "landingAlianza" })
        .catch(() => { })
    },
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
            To: 'jose.evsa@gmail.com',
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
.b-agent-demo .b-agent-demo_powered_by {
  display: none !important;
}
#botw {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
}
#cns-cred {
  font-family: "Nunito" !important;
}
</style>



