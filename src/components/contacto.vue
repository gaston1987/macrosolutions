<template>
  <div id="contacto">
    <v-main>

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
      
      <v-col
        xs="12"
        sm="12"
        md="5"
        class="float-right"
      >
        <v-card flat>

          <v-toolbar
            color="blue"
            cards
            dark
            flat
          >

            <v-card-title class="font-weight-black">
              Contáctenos
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
              @click="$refs.form.reset()"
              class="white--text"
              color="error"
              depressed
              rounded
            >
              Borrar
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!form"
              :loading="isLoading"
              class="white--text"
              color="success"
              depressed
              rounded
            >
              Enviar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-main>
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
#contacto {
  width: 95% !important;
}
</style>
