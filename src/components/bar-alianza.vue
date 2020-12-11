<template>
  <div id="alianza">
    <v-app-bar
      app
      
      height="80px"
      id="app-bar-ali"
      elevation="5"
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
      <h3>ALIANZA <br>
<strong>Prestamos personales</strong></h3>
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


<v-footer :padless="true" >
      <v-card
        flat
      
        tile
        width="100%"
        class="secondary white--text text-center"
      >

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <a href="https://indev.com.ar/" target="_blank"> INDEV - Deploying E-business </a>
        </v-card-text>
      </v-card>
    </v-footer>



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
#app-bar-ali {
  background-image: -webkit-linear-gradient(0deg, #3c96ff 0%, #2dfbff 100%) !important;

}

#app-bar-ali a {
  font-size: 14px;
  text-transform: uppercase !important;


}

#app-bar-ali h3 {
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  
  text-decoration: none !important;
  padding: 5px;
  color:#ffffff;
  text-align: center;
  text-transform: none !important;
}
#app-bar-ali h3 strong{
  font-style: italic;
  font-size: 16px;
}



#menuali a{

text-decoration: none !important;
color: black !important;

}

@media only screen and (max-width: 600px) {
  #social {
    display: none;
  }

  #logo {
    width: 90%;
  }
}

#alianza{

  background-image: -webkit-linear-gradient(0deg, #2c89f3 0%, #26e9f0 100%) !important;
}
#no-background-hover::before {
   background-color: transparent !important; 
}

.theme--light.v-tabs > .v-tabs-bar
 {
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