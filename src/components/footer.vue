    <template>
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
</template>

<script>
export default {
  name: 'footer',

  components: {
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
}
</script>
