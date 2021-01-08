<template>
  <v-container
    fluid
    class="my-8"
  >
    <v-row
      justify="space-around"
      no-gutters
    >
      <v-col class="col-md-3 col-xs-12">
        <v-card
          class="pt-10"
          flat
        >

          <v-img
            contain
            position="center"
            style="padding-top:50px;"
            class="animate__animated animate__fadeInUp"
            src="@/assets/ALIANZA_FINAL.png"
          ></v-img>

        </v-card>

      </v-col>

      <v-col class="col-md-3 col-xs-12">

        <v-card flat>

          <v-img
            contain
            position="center"
            style="padding-top:350px;"
            class="animate__animated animate__fadeInUp"
            src="@/assets/marca_final2021.png"
          ></v-img>

        </v-card>

      </v-col>
    </v-row>

  </v-container>
</template>



<script>
export default {
  data: () => ({
    model: null,
  }),
}
</script>


<style lang="scss" scoped>
$color-1: #0e40c6;
section {
  background-color: rgb(236, 236, 236);
  padding-top: 2em;
  padding-bottom: 2em;

  @media (max-width: 400px) {
    padding-top: 1em;
    padding-bottom: 1em;
  }
}

h1 {
  font-weight: 700;
}
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.titulo {
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 2em;
  color: $color-1;
}

.clienteImg {
  margin: 0.8em 1.3em;
  transition: filter 0.5s ease-in-out;
  max-height: 120px;

  &:hover {
    filter: grayscale(1);
  }

  @media (max-width: 600px) {
    max-height: 50px;
    margin: 0.8em 1.3em;
  }
}

@media only screen and (max-width: 600px) {
  #clientes img {
    min-height: 80px;
  }
}
</style>