<template>
  <div>
    <v-app-bar
      app
      color="white"
      dark
      height="80px"
      id="home-app-bar"
      elevation="5"
    >
      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title>
        <div>
          <router-link to="/">
            <v-img
              id="logo"
              src="@/assets/logo0001.png"
              contain
              position="center"
              class="animate__animated animate__fadeInUp"
            />
          
          </router-link>
            <h3>Prestamos personales</h3>
        </div>
      </v-toolbar-title>

      <v-spacer />

      <div id="menuali">
        <v-tabs
          class="hidden-sm-and-down"
          optional
          light
        >
          <v-tab
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          > <a
              href="#landing-alianza"
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
    </v-app-bar>
    <parallax-alianza>
    </parallax-alianza>

    <landing-alianza>
    </landing-alianza>

    <cns-credito>
    </cns-credito>

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
    CnsCredito
  },



  data () {


    return {

      drawer: null,


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
#home-app-bar a {
  font-size: 14px;
  text-transform: uppercase !important;
}

#home-app-bar h3 {
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-style: italic;
  text-decoration: none !important;
  padding: 5px;
  color: dimgray;
  text-align: center;
  text-transform: none !important;
}




#menuali a{

text-decoration: none !important;

}

@media only screen and (max-width: 600px) {
  #social {
    display: none;
  }

  #logo {
    width: 90%;
  }
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
