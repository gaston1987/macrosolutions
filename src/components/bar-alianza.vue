<template>
  <div id="alianza">
    <v-app-bar
      app
      height="80px"
      id="app-bar-ali"
      elevation="0"
    >

      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title>
        <div>
          <router-link to="/">
            <v-img
              id="logo"
              src="@/assets/Alianza_1.png"
              contain
              max-height="70px"
              position="center"
              class="animate__animated animate__fadeInUp"
            />

          </router-link>

        </div>

      </v-toolbar-title>
      <v-img
        id="logo2"
        src="@/assets/Alianza02.png"
        contain
        max-height="50px"
        position="left"
        class="animate__animated animate__fadeInUp"
      />
      <v-spacer />

      <div id="menuali">
        <v-tabs
          class="hidden-sm-and-down"
          optional
          id="no-background-hover"
        >
          <v-tab
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
            id="no-background-hover"
            color="transparent"
          > <a
              href="#simu"
              v-smooth-scroll
            >
              Simulador de Creditos </a>
          </v-tab>

          <v-tab
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            <a
              href="#cns-cred"
              v-smooth-scroll
            >
              Consulte su Credito</a>
          </v-tab>

          <v-tab
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            <a
              href="http://creditos.am-sistemas.com/"
              target='new'
            >
              Red de Venta</a>
          </v-tab>

          <v-tab
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          > <a
              href="#"
              v-smooth-scroll
              @click="onMacro"
            >
              Regresa a MacroSolutions</a>
          </v-tab>

        </v-tabs>
      </div>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
        dark
        color="blue accent-4"
        medium
        elevation="5"
      />
      <home-drawer
        v-model="drawer"
        :items="this.items_alianza"
      />

    </v-app-bar>

    <parallax-alianza>
    </parallax-alianza>

    <landing-alianza>
    </landing-alianza>

    <cns-credito>
    </cns-credito>
    <v-col cols="12" class="pie">
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
          <p style="text-align:center; margin-top:30px">
            <v-icon style="color:#1976d2; padding:10px; font-size:30px">mdi-office-building-marker-outline</v-icon>
            <b> 25 de Mayo 431, Piso 3, of. F </b>
          </p>
          <p style="text-align:center">
            <v-icon style="color:#1976d2; padding:10px; font-size:30px">mdi-phone-forward-outline</v-icon>
            <b> Tel: +54 11 52527626 </b>
          </p>
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
        </v-card>
        <v-card
          flat
          tile
          width="100%"
          class="secondary white--text text-center"
        >
          <v-row
            justify="center"
            class="white--text"
            style="font-size: 12px"
          >
            <a class="pr-3 pt-5">Terminos y Condiciones | </a>

            <a class="pr-3 pt-5">Politicas de Privacidad | </a>

            <a class="pr-3 pt-5">Solicitud de Credito Modelo</a>

          </v-row>

          <v-row justify="center">
            <v-col
              md="2"
              xd="12"
            >
              <a
                href="http://www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp"
                target="new"
              >
                <v-img
                  src="@/assets/afip.jpg"
                  contain
                  height="100px"
                  class="animate__animated animate__fadeInUp"
                ></v-img>
              </a>
            </v-col>
            <v-col
              md="2"
              xd="12"
            >
              <a
                href="http://www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp"
                target="new"
              >
                <v-img
                  src="@/assets/usr_finan.png"
                  contain
                  width="200px"
                  class="animate__animated animate__fadeInUp"
                ></v-img>
              </a>
            </v-col>
            <v-col
              md="2"
              xd="12"
            >
              <a
                href="https://www.argentina.gob.ar/aaip/datospersonales/reclama"
                target="new"
              >
                <v-img
                  contain
                  width="200px"
                  class="animate__animated animate__fadeInUp"
                  src="@/assets/reg_nac_datos.jpg"
                ></v-img>
              </a>
            </v-col>
            <v-col
              md="2"
              xd="12"
            >
              <a
                href="http://www.bcra.gob.ar"
                target="new"
              >
                <v-img
                  contain
                  width="90px"
                  class="animate__animated animate__fadeInUp"
                  src="@/assets/logo_bcra.png"
                ></v-img>
              </a>
            </v-col>
          </v-row>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <a
              href="https://indev.com.ar/"
              target="_blank"
            > INDEV - Deploying E-business </a>
          </v-card-text>
        </v-card>

      </v-footer>
    </v-col>

  </div>
</template>


    <script>
import LandingAlianza from './landing-alianza.vue';
import ParallaxAlianza from './parallax-alianza.vue';
import CnsCredito from './cns-credito.vue';


export default {

  name: 'HomeAppBar',

  components: {
    LandingAlianza,
    ParallaxAlianza,
    CnsCredito,
    HomeDrawer: () => import('./Drawer'),
  },



  data () {

    return {

      drawer: null,
      items_alianza: [
        { label: 'Simulador de Creditos', link: '#simu' },
        { label: 'Consulta Creditos', link: '#cns-cred' },
        { label: 'Red de Venta', link: 'http://creditos.am-sistemas.com/' },
        { label: 'Regresa a Macrosolutions', link: '/' },
      ],
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

    onMacro () {
      // eslint-disable-next-line no-console
      //console.log(['onSimu)'])
      this.$router.push({ name: "BarIndex" })
        .catch(() => { })
    },
  }
};
</script>




<style>
@font-face {
  font-family: "Nunito";
  src: url("../assets/fonts/Nunito-Regular.ttf");
}

body {
  margin: 0 auto;
  overflow: hidden; /* Hide scrollbars */
}

#app-bar-ali {
  /* background-image: -webkit-linear-gradient(0deg, #3c96ff 0%, #2dfbff 100%) !important; */
  background-image: -webkit-linear-gradient(
    0deg,
    #b4e081e5 0%,
    hsl(128, 31%, 67%) 100%
  ) !important;
}

#app-bar-ali a {
  font-size: 14px;
  text-transform: uppercase !important;
}

#app-bar-ali h3 {
  font-size: 18px;
  font-family: "Nunito";
  font-weight: 500;

  text-decoration: none !important;
  padding: 5px;
  color: #ffffff;
  text-align: center;
  text-transform: none !important;
}
#app-bar-ali h3 strong {
  font-style: italic;
  font-size: 16px;
}

#menuali a {
  text-decoration: none !important;
  color: black !important;
  font-family: "Nunito";
}

@media only screen and (max-width: 600px) {
  #social {
    display: none;
  }

  #logo {
    width: 90%;
  }
}

#alianza {
  font-family: "Nunito" !important;
  background-image: -webkit-linear-gradient(
    0deg,
    #b4e081e5 0%,
    hsl(128, 31%, 67%) 100%
  ) !important;
}
#no-background-hover::before {
  background-color: transparent !important;
}

.theme--light.v-tabs > .v-tabs-bar {
  background-color: transparent !important;
}
</style>


<style lang="sass">
#home-app-bar
.v-tabs-slider
  max-width: 24px
  margin: 0 auto

  .v-tab
    &::before
      display: none
</style>

<style lang="scss">
#no-background-hover::before {
  background-color: transparent !important;
}
</style>