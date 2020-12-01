  <template>
  <v-bottom-navigation
    color="primary"
    horizontal
    background-color="blue"
    min-height="65px"
    grow
    v-model="drawer"
  >
    <v-btn class="botones">
      <a href="#servicio" v-smooth-scroll>SERVICIOS</a>
    </v-btn>

    <v-btn class="botones">
      <a href="#" v-smooth-scroll>MACROCREDITOS</a>
    </v-btn>

    <v-btn class="botones">
      <a href="#clientes" v-smooth-scroll>CLIENTES</a>
    </v-btn>

    <v-btn class="botones">
      <a href="#" v-smooth-scroll>ATENCION AL CLIENTE</a>
    </v-btn>

    <v-btn class="botones">
      <a href="#contacto" v-smooth-scroll>CONTACTO</a>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
