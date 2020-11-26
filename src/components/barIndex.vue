<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white"
      dark
      height="80px"
    >
      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title >
        <router-link to="/">
          <v-img
            src="@/assets/logo0001.png"
            
            contain
            position="center"
          />

        </router-link>

      </v-toolbar-title>
     
      <v-spacer />
     
    </v-app-bar>
    <v-content>
      <v-bottom-navigation
        :value="activeBtn"
        color="primary"
        horizontal
        background-color="blue"
        min-height="65px"
      >
 
    <v-btn>
      <span>Servicios</span>

      <v-icon>fas fa-list</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
    </v-content>
    <Parallax />
    <router-view />
    <v-footer :padless="true">
      <v-card
        flat
        tile
        width="100%"
        class="secondary white--text text-center"
      >
        <v-card-text>

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
import Parallax from '@/components/parallax';

export default {

  name: 'barIndex',
  components: {
    Parallax,

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
<style>
.v-btn {
  
  margin: 7px;
  padding: 4px;
  color: #ffffff !important;

}

.v-btn span {
  font-size: 18px;
  letter-spacing: 1px;
   color: #ffffff !important;
   

}

.icon{

   border:0px !important; 
}


</style>