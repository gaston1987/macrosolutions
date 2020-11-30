<template>
  <v-app id="inspire">
    <bar/>
      <v-bottom-navigation
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
      </v-btn>

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
  
    <carrousel/> 
    <div class="divider"></div>
    <servicios/>
 
   
    <div class="text-right">
      <v-dialog width="400">
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
          max-width="auto"
          height="auto"
          flat
        >
          <div class="text-right">
            <v-btn
              color="green"
              fab
              small
              dark
              @click="dialog = false"
            >
              <v-icon>
                mdi-close-circle
              </v-icon>
            </v-btn>
          </div>
          <iframe
            allow="microphone;"
            width="400"
            height="400"
            src="https://console.dialogflow.com/api-client/demo/embedded/7059d5b3-4a9b-4a5b-99c7-b6d698e387b1"
            text-color="primary"
          >
          </iframe>

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
import bar from '@/components/bar';
import carrousel from '@/components/carrousel';
import servicios from '@/components/servicios';



export default {
  name: 'barIndex',

  components: {
    
    bar,
    carrousel,
    servicios,
    
  

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

.botones span {
  color: #ffffff !important;
}

.icon {
  border: 0px !important;
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
}

#inspire a {
  text-decoration: none !important;
  text-transform: none;
  text-decoration-style: none;
}
.divider{
   padding-top: 20px;
   padding-bottom: 15px;

}
</style>




