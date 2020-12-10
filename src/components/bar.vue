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
          <h3>De pequeñas a grandes soluciones</h3>
        </div>
      </v-toolbar-title>

      <v-spacer />

      <div>
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
              href="#servicio"
              v-smooth-scroll
            >
              Servicios </a>
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
              @click="onSimu"
            >
              MacroCreditos</a>
          </v-tab>

          <v-tab
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          ><a
              href="#clientes"
              v-smooth-scroll
            >
              Clientes</a>
          </v-tab>

          <v-tab
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          ><a
              href="#contacto"
              v-smooth-scroll
            >
              Contacto</a>
          </v-tab>

        </v-tabs>
      </div>

      <v-card-actions
        id="social"
        class="white justify-center animate__animated animate__fadeInRight"
      >
        <v-btn
          v-for="(social, i) in socials"
          :key="i"
          :color="social.color"
          fab
          icon
          small
          position="right"
        >
          <v-icon>{{ social.icon }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
        dark
        color="blue accent-4"
        medium
        elevation="5"
      />
    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="items"
    />
  </div>
</template>


    <script>
export default {

  name: 'HomeAppBar',

  components: {
    HomeDrawer: () => import('./Drawer'),
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
      drawer: null,

      items: [
        'Servicios',
        'Macrocreditos',
        'Clientes',
        'Contacto',
      ],
    };
  },
  methods: {

    onSimu () {
      // eslint-disable-next-line no-console
      console.log(['onSimu)'])
      this.$router.push({ name: "landingAlianza" })
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
  font-weight: 300;
  font-style: italic;

  padding: 5px;
  color: dimgray;
  text-align: center;
  text-transform: none !important;
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
