    <template>
   <v-footer :padless="true">
      <v-card
        flat
        tile
        width="100%"
        class="secondary white--text text-center"
      >

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —<a href="https://indev.com.ar/"> <strong>INDEV - Deploying E-business</strong> </a>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
  name: 'footer',

  components: {
  },

}
</script>
