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

    <v-col cols="12">
      <v-footer :padless="true">
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