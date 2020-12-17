
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
          color="indigo"
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

          <v-card-text>
            <p
              class="font-weight-black"
              style="max-width: 20rem;"
            > 👋 Hola!, soy Maca tu asistente virtual.
              Tengo un equipo Macrosolutions que me está enseñando para poder ayudarte cada vez mejor.
              Y también podemos conversar sobre los siguientes temas:
              ¿Con cuál te puedo ayudar?</p>
          </v-card-text>
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

              <div
                id="cns-cred"
                style="margin-top:50px; margin-bottom:30px; "
              >

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
                    <h2>
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

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="dialog3 = false"
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
          v-model="dialog"
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
                @click="dialog = false"
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
import axios from 'axios';
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
      form: {
        dni: '',
        credito: ''
      },
      valid: true,
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
.b-agent-demo .b-agent-demo_powered_by {
  display: none !important;
}
#botw {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
}
</style>



