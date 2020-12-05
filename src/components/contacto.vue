<template>
  <div id="contacto">
    <v-content>
      <v-row width="90%">
            <v-col
          xs="12"
          sm="12"
          md="1"
  
        
        >
  </v-col>

        <v-col
          xs="12"
          sm="12"
          md="5"
         
          class="float-left"
          flat
          pr-5
        >
          <v-card
            flat
            pr-10
          >
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0539735026796!2d-58.37322388484934!3d-34.60279666495628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33532cf4f7049%3A0xf99b0dbe84a50b6d!2s25+de+Mayo+431%2C+C1002ABI+CABA!5e0!3m2!1ses!2sar!4v1506382137560"
                style="border:0"
                width="100%"
                height="600px"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>

          </v-card>

        </v-col>
       
         <v-col
          xs="12"
          sm="12"
          md="1"
  
        
        >
  </v-col>


        <v-col
          xs="12"
          sm="12"
          md="5"
  
          class="float-right"
        >
          <v-card>
            <v-system-bar
              color="indigo darken-4"
              dark
              height="10px"
            >
              <v-spacer></v-spacer>

            </v-system-bar>
            <v-toolbar
              color="indigo darken-1"
              cards
              dark
              flat
            >

              <v-card-title class="title font-weight-regular">
                Contactenos
              </v-card-title>
              <v-spacer></v-spacer>

            </v-toolbar>
            <v-form
              ref="form"
              v-model="form"
              class="pa-4 pt-6"
            >
              <v-text-field
                filled
                color="deep-purple"
                counter="6"
                label="Nombre"
                style="min-height: 96px"
              ></v-text-field>
              <v-text-field
                v-model="phone"
                filled
                color="deep-purple"
                label="Telefono"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="[rules.email]"
                filled
                color="deep-purple"
                label="Email "
                type="email"
              ></v-text-field>
              <v-textarea
                auto-grow
                filled
                color="deep-purple"
                label="Consulta"
                rows="1"
                height="8em"
              ></v-textarea>

            </v-form>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                text
                @click="$refs.form.reset()"
              >
                Borrar
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!form"
                :loading="isLoading"
                class="white--text"
                color="deep-purple accent-4"
                depressed
              >
                Enviar
              </v-btn>
            </v-card-actions>
            <v-dialog
              v-model="dialog"
              absolute
              max-width="400"
              persistent
            >
              <v-card>
                <v-card-title class="headline grey lighten-3">
                  Legal
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn
                    text
                    @click="agreement = false, dialog = false"
                  >
                    No
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="white--text"
                    color="deep-purple accent-4"
                    @click="agreement = true, dialog = false"
                  >
                    Yes
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
        </v-col>
      </v-row>
    </v-content>
  </div>
</template>


<script>
export default {
  data: () => ({
    agreement: false,
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    phone: undefined,
    rules: {
      email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        'Password must contain an upper case letter, a numeric character, and a special character',
      required: v => !!v || 'This field is required',
    },
  }),
}
</script>

<style scoped>
#contacto{
  width: 95% !important;
}
</style>
