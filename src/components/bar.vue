  <template>
  <v-app-bar app color="white" dark height="75px">
    <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

    <v-toolbar-title>
      <router-link to="/">
        <v-img src="@/assets/logo0001.png" contain position="center" />
        <h3>De pequeñas a grandes soluciones</h3>
      </router-link>
    </v-toolbar-title>

    <v-spacer />

    <v-card-actions id="social" class="white justify-center">
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
</template>


    <script>
export default {
  data() {
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
};
</script>