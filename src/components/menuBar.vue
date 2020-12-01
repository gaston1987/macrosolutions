  <template>
  <v-bottom-navigation
    color="primary"
    horizontal
    background-color="blue"
    min-height="65px"
  >
    <v-btn class="botones">
      
      <a href="#servicio">SERVICIOS</a>
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
</template>
<script>
  export default {
    data () {
      return {
      }
    },
  }
</script>