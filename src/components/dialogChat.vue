
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
          v-bind="attrs"
          v-on="on"
          id="botw"
          elevation="24"
          large
          fab
        >
          <img
            width="70px"
            src="@/assets/avatar_chat.png"
          />
        </v-btn>

      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img
                width="70px"
                src="@/assets/avatar_chat.png"
              />
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
                  <v-img src="@/assets/avatar_chat.png"></v-img>
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
                <cns-credito></cns-credito>

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
                <v-img src="@/assets/avatar_chat.png"></v-img>
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
                <v-img src="@/assets/avatar_chat.png"></v-img>
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
        <v-list-item
          link
          v-bind="attrs"
          v-on="on"
        >
          <v-list-item-action>

            <v-icon>mdi-whatsapp</v-icon>

          </v-list-item-action>
          <v-list-item-title>CHATEÁ CON NOSTROS!</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
      </v-card>

    </v-menu>
  </div>
</template>

<script>
import cnsCredito from './cns-credito.vue'
export default {
  components: { cnsCredito },
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
      dialog5: false,
    }
  },
  methods: {

    onSimu () {
      // eslint-disable-next-line no-console
      //console.log(['onSimu)'])
      this.$router.push({ name: "landingAlianza" })
        .catch(() => { })
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



