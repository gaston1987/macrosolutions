<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white"
      dark
      height="75px"
    >
      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title>
        <router-link to="/">
          <v-img
            src="@/assets/logo0001.png"
         
            contain
            position="center"
          />
          <h3>De pequeñas a grandes soluciones</h3>
        </router-link>
        

      </v-toolbar-title>
      
     
      <v-spacer />
      
      <v-card-actions class="white justify-center">
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
     
    </v-app-bar>
    <v-content>
      <v-bottom-navigation
        :value="activeBtn"
        color="primary"
        horizontal
        background-color="blue"
        min-height="65px"
      >
 
    <v-btn class="botones">
      <span>SERVICIOS</span>

   
    </v-btn>

    <v-btn class="botones">
      <span>MACROCREDITOS</span>

     
    </v-btn >

    <v-btn class="botones">
      <span>CLIENTES</span>

     
    </v-btn>

      <v-btn class="botones">
      <span>ATENCION AL CLIENTE</span>

     
    </v-btn>
    
      <v-btn class="botones">
      <span>CONTACTO</span>

     
    </v-btn>
  </v-bottom-navigation>

    </v-content>
 
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
 
  
    <router-view />
   
    
    <div class="text-right">
      <v-dialog
        v-model="dialog"
        width="500"
        flat
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="mx-2"
            fab
            dark
            large
            color="green"
          >
            <v-icon dark>
              mdi-whatsapp
            </v-icon>
          </v-btn>
        </template>

        <v-card
          class="mx-auto"
          max-width="400"
        >

          <iframe
            allow="microphone;"
            width="400"
            height="400"
            src="https://console.dialogflow.com/api-client/demo/embedded/7059d5b3-4a9b-4a5b-99c7-b6d698e387b1"
            text-color="primary"
          >
          </iframe>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Cerrar Chat
          </v-btn>

        </v-card>
      </v-dialog>
    </div>
    <v-footer :padless="true">
      <v-card
        flat
        tile
        width="100%"
        class="secondary white--text text-center"
      >

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>INDEV e-bussines</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

/*import Parallax from "@/components/parallax";*/


export default {
  name: "barIndex",
  components: {
   /*Parallax,*/
  

  },
  data: () => ({
    dialog: false,
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      // 'mdi-linkedin',
      "mdi-instagram",
    ],
    drawer: null,
    iconClass: "mdi-facebook",
    iconClass1: "mdi-twitter",
    iconClass2: "mdi-instagram",
  }),

  methods: {
    onLogin() {
      // eslint-disable-next-line no-console
      console.log(["onLogin()"]);
      this.$router.push({ name: "luser" }).catch(() => {});
    },
    onClientes() {
      // eslint-disable-next-line no-console
      console.log(["onClientes()"]);
      this.$router.push({ name: "clientes" }).catch(() => {});
    },
    onLogsoc() {
      // eslint-disable-next-line no-console
      console.log(["onLogsoc()"]);
      this.$router.push({ name: "crudSoc" }).catch(() => {});
    },
    onPlanes() {
      // eslint-disable-next-line no-console
      console.log(["onPlanes()"]);
      this.$router.push({ name: "planes" }).catch(() => {});
    },
  },
};
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
  
  
}

.v-btn span {
  font-size: 15px;
  letter-spacing: 1px;
 
}

.botones span{
  color: #FFFFFF !important;
 
}

.icon {
  border: 0px !important;
}

#inspire h3{
  font-size: 16px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-style: italic;
  padding: 5px ;
  color: dimgray;
  text-align: center;


}

#inspire a {

  text-decoration: none !important;
  text-transform:none;
  text-decoration-style: none;

}


</style>

<script>
  export default {
    data: () => ({
    
      socials: [
        {
          icon: 'mdi-facebook',
          color: 'indigo',
        },
        {
          icon: 'mdi-linkedin',
          color: 'cyan darken-1',
        },
        {
          icon: 'mdi-instagram',
          color: 'red lighten-3',
        },
      ],

       items: [
          {
            src: '.@/assets/sup001.png',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    }),

    methods: {
      getImage () {
        const min = 550
        const max = 560

        return Math.floor(Math.random() * (max - min + 1)) + min
      },
    },
  }
</script>


