<template>

  <v-app id="inspire">
    <bar />
    <carrousel />
    <div class="divider"></div>
    <servicios />

    <div class="divider"></div>
    <cardNosotros />
    <contacto />
    <div class="text-right">

      <dialogChat />
    </div>
    <v-col
      cols="12"
      class="pie"
    >
      <v-footer :padless="true">
        <v-card
          flat
          tile
          width="100%"
          class="white--text text-center"
          style=" background: #585454"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0539735026796!2d-58.37322388484934!3d-34.60279666495628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33532cf4f7049%3A0xf99b0dbe84a50b6d!2s25+de+Mayo+431%2C+C1002ABI+CABA!5e0!3m2!1ses!2sar!4v1506382137560"
            style="border:0"
            width="100%"
            height="440px"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>

          <v-row justify="center">
            <v-col
              flat
              class="col-md-6 col-xs-12 col-sm-12 "
            >

              <p style="text-align:center; margin-top:30px">
                <v-icon style="color:#1976d2; padding:10px; font-size:30px">mdi-office-building-marker-outline</v-icon>
                <b> 25 de Mayo 431, Piso 3, of. F </b>
              </p>
              <p style="text-align:center">
                <v-icon style="color:#1976d2; padding:10px; font-size:30px">mdi-phone-forward-outline</v-icon>
                <b> Tel: +54 11 52527626 </b>
              </p>

            </v-col>

          </v-row>
        </v-card>

        <v-col
          cols="12"
          class="pie"
        >

          <v-card
            flat
            tile
            width="100%"
            class="secondary white--text text-center"
          >

            <v-btn
              v-for="(social, i) in socials"
              :key="i"
              :color="social.color"
              fab
              icon
              x-large
              position="right"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <a
                href="https://indev.com.ar/"
                target="_blank"
              > INDEV - Deploying E-business </a>
            </v-card-text>
          </v-card>
        </v-col>
      </v-footer>

    </v-col>
  </v-app>
</template>

<script>
import bar from '@/components/bar';
import carrousel from '@/components/carrousel';
import servicios from '@/components/servicios';
//import parallax from '@/components/parallax';
//import clientes from '@/components/clientes';
import contacto from '@/components/contacto';
import dialogChat from '@/components/dialogChat';
import cardNosotros from '@/components/cardNosotros';

export default {
  name: 'barIndex',

  components: {

    bar,
    carrousel,
    servicios,
    //parallax,
    //clientes,
    contacto,
    dialogChat,
    cardNosotros
  },
  data () {

    return {
      socials: [
        {
          icon: "mdi-facebook",
          color: "indigo",
        },
        {
          icon: "mdi-linkedin",
          color: "cyan darken-1",
        },
        {
          icon: "mdi-instagram",
          color: "red lighten-3",
        },
      ],
    };
  },
  methods: {
    getImage () {
      const min = 550
      const max = 560

      return Math.floor(Math.random() * (max - min + 1)) + min
    },
  },
  dialog: false,

}

</script>


<style>
.v-btn {
  margin: 7px;
  padding: 4px;
}

.v-btn span {
  font-size: 15px;
  letter-spacing: 1px;
}

.botones a {
  color: #ffffff !important;
}

.icon {
  border: 0px !important;
}
#inspire {
  width: 100%;
}
#inspire h3 {
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-style: italic;

  padding: 5px;
  color: dimgray;
  text-align: center;
  text-transform: none !important;
}

#inspire a {
  text-decoration: none !important;
  text-transform: none;
  text-decoration-style: none;
}
.divider {
  padding-top: 20px;
  padding-bottom: 15px;
}

.white--text a {
  color: #ffffff !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.pie {
  padding: 0px !important;
}
</style>







