<template>
  <v-app id="inspire">
    <bar/>
     <menu-bar />
  
    <carrousel /> 
    <div class="divider"></div>
    <servicios />
    <parallax />
    
   
    <div class="text-right">
     <dialogChat />
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
import parallax from '@/components/parallax';
import dialogChat from '@/components/dialogChat';
import MenuBar from '@/components/menuBar';
export default {
  name: 'barIndex',

  components: {
    
    bar,
    carrousel,
    servicios,
    parallax,
    dialogChat,
    MenuBar,
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




