<template>
  <v-app id="inspire">
    <bar />
    <carrousel />
    <div class="divider"></div>
    <servicios />

    <div class="divider"></div>
    <cardNosotros />
    <contacto />
    <div class="text-right">

      <dialogChat />
    </div>
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
  </v-app>
</template>

<script>
import bar from '@/components/bar';
import carrousel from '@/components/carrousel';
import servicios from '@/components/servicios';
//import parallax from '@/components/parallax';
//import clientes from '@/components/clientes';
import contacto from '@/components/contacto';
import dialogChat from '@/components/dialogChat';
import cardNosotros from '@/components/cardNosotros';

export default {
  name: 'barIndex',

  components: {

    bar,
    carrousel,
    servicios,
    //parallax,
    //clientes,
    contacto,
    dialogChat,
    cardNosotros
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
    };
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

.botones a {
  color: #ffffff !important;
}

.icon {
  border: 0px !important;
}
#inspire {
  width: 100%;
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
  text-transform: none !important;
}

#inspire a {
  text-decoration: none !important;
  text-transform: none;
  text-decoration-style: none;
}
.divider {
  padding-top: 20px;
  padding-bottom: 15px;
}

.white--text a {
  color: #ffffff !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>







