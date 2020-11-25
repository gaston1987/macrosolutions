<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white"
      dark
    >
      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title style="width: 350px">
        <router-link to="/">
          <v-img
            src="@/assets/logo.png"
            max-width="100"
            contain
            position="left"
          />
        </router-link>

      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Buscar"
        class="hidden-sm-and-down pl-10 ml-4"
        rounded
        background-color="blue"
      />
      <v-spacer />
      <v-btn
        icon
        color="blue"
      >
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-bottom-navigation
        :value="activeBtn"
        color="primary"
        horizontal
      >
        <a class="v-btn">
          <span>Inicio</span>
        </a>
        <v-menu
          open-on-hover
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">
              <span>Servicios</span>
            </v-btn>
          </template>
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
          >

            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="onTienda"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>

          </v-card>
        </v-menu>
        <a class="v-btn">
          <span>MacroCreditos</span>
        </a>
        <v-btn>
          <span>Clientes</span>
        </v-btn>
        <v-btn>
          <span>Atención al Clientes</span>
        </v-btn>
        <v-btn>
          <span>Contacto</span>
        </v-btn>
      </v-bottom-navigation>
    </v-content>
    <router-view />
    <v-footer :padless="true">
      <v-card
        flat
        tile
        width="100%"
        class="secondary white--text text-center"
      >
        <v-card-text>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-home</v-icon>
          </v-btn>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-calendar</v-icon>
          </v-btn>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-delete</v-icon>
          </v-btn>

        </v-card-text>

        <v-card-text class="white--text pt-0">
          Abre tu tienda online y empieza a vender tus productos hoy mismo. Asistencia técnica 24h. Tu mejor opción. Las mejores páginas web. Sin restricciones. Optimizado para móviles.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>INDEV e-bussines</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>


export default {

  name: 'barIndex',
  components: {


  },
  data: () => ({
    icons: [

      'mdi-facebook',
      'mdi-twitter',
      // 'mdi-linkedin',
      'mdi-instagram',

    ],
    drawer: null,
    iconClass: "mdi-facebook",
    iconClass1: "mdi-twitter",
    iconClass2: "mdi-instagram",
  }),

  methods: {

    onLogin () {
      // eslint-disable-next-line no-console
      console.log(['onLogin()'])
      this.$router.push({ name: "luser" })
        .catch(() => { })
    },
    onClientes () {
      // eslint-disable-next-line no-console
      console.log(['onClientes()'])
      this.$router.push({ name: "clientes" })
        .catch(() => { })
    },
    onLogsoc () {
      // eslint-disable-next-line no-console
      console.log(['onLogsoc()'])
      this.$router.push({ name: "crudSoc" })
        .catch(() => { })
    },
    onPlanes () {
      // eslint-disable-next-line no-console
      console.log(['onPlanes()'])
      this.$router.push({ name: "planes" })
        .catch(() => { })
    },



  },
}
</script>

<!--
<style>

.mdi-facebook{ color: purple !important;}
.mdi-facebook:hover {color: blue !important;}

.mdi-twitter{ color: purple !important;}
.mdi-twitter:hover {color:lightblue !important;}

.mdi-instagram{ color: purple !important;}
.mdi-instagram:hover {color: plum !important;}


.v-btn__content {

  color:#5a1487 !important;
}

</style>
--->
