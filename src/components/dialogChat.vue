    <template>
  <v-dialog
    v-model="dialog"
    width="400"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        class="mx-2"
        fab
        elevation="10"
        large
        color="green"
        id="botw"
      >
        <v-icon color="white">
          mdi-whatsapp
        </v-icon>
      </v-btn>
    </template>

    <v-card
      class="mx-auto"
      max-width="auto"
      height="auto"
      flat
      color="primary"
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
</template>

<script>
export default {
  name: 'dialogChat',
  data () {
    return {
      dialog: false,
    }
  },
  components: {
  },

}
</script>

<style>
.b-agent-demo .b-agent-demo_powered_by {
  display: none !important;
}
#botw {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
}
</style>

