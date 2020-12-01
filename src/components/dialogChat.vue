    <template>
   <v-dialog 
            v-model="dialog" 
            width="400">
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
</template>

<script>
export default {
  name: 'dialogChat',
  data (){
return{
     dialog: false,
}
  },
  components: {
  },

}
</script>
