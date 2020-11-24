<template>
  <v-container fluid>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-btn
              color="purple"
              fab
              @click="onClientes"
            >
              <v-icon color="white">mdi-calendar-month-outline</v-icon>
            </v-btn>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Reservas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-btn
              color="purple"
              fab
              @click="onLogsoc"
              v-if="currentUser"
            >
              <v-icon color="white">mdi-registered-trademark</v-icon>
            </v-btn>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-if="currentUser">Registrá tu negocio</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-btn
              color="purple"
              fab
              @click="onPlanes"
            >
              <v-icon color="white">mdi-alpha-p-circle-outline</v-icon>
            </v-btn>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Planes</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="white"
      dark
      loading
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/">
          <v-img
            src="@/assets/logo.png"
            max-width="100"
            contain
            position="left"
          />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <searchBar></searchBar>
      </v-toolbar-items>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 hidden-sm-and-down"
        dark
        icon
      >
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <div
        v-if="currentUser"
        class="my-2 mx-5"
      >
        <router-link to="/profile">

          <h5 style="color:#ffffff"> {{ currentUser.username }} &nbsp; </h5>
        </router-link>
      </div>
      <div class="my-2">
        <a @click.prevent="logOut">
          <v-icon
            v-if="currentUser"
            size="24px"
          > mdi-logout </v-icon>
        </a>
        <v-btn
          v-if="!currentUser"
          color="white"
          fab
          dark
          @click="onLogin"
          small
        >
          <v-icon color="blue"> mdi-account-circle - </v-icon>
        </v-btn>

      </div>

    </v-app-bar>

  </v-container>

</template>

<script>
import searchBar from "@/components/searchBar"

export default {

  name: 'barIndex',
  components: {
    searchBar,

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
