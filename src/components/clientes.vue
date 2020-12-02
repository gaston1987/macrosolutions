<template>
  <!-- CLIENTES -->
  <section style="background-color: #f7f7f7;">
    <v-layout
      column
      wrap
      align-center
    >
      <v-flex
        xs12
        class="my-3"
      >
        <div class="text-xs-center">
          <h1 class="text-center ">Clientes </h1>
        </div>
      </v-flex>
    </v-layout>

    <v-layout
      class="px-4 pb-3"
      wrap
    >
      <div class="text-xs-center mb-5">
        <a
          target="_blank"
          href=""
        > <img
            src="@/assets/tm.jpeg"
            alt="Todo Moto SRL"
            class="clienteImg"
          > </a>
        <a
          target="_blank"
          href=""
        > <img
            src="@/assets/eq.jpeg"
            id="equity"
            alt="Equity Administración & Finanzas SA"
            class="clienteImg"
          ></a>
        <a
          target="_blank"
          href=""
        > <img
            src="@/assets/rabo.jpeg"
            alt="La Rabonera"
            class="clienteImg"
          ></a>
        <a
          target="_blank"
          href=""
        > <img
            src="@/assets/rai.png"
            alt="RAI Distribuciones S.A."
            class="clienteImg"
          ></a>
        <a
          target="_blank"
          href=""
        > <img
            src="@/assets/tr.jpeg"
            alt="
            Meat
            Trading
            S.A."
            class="clienteImg"
          ></a>
        <a
          target="_blank"
          href=""
        > <img
            src="@/assets/ille.jpeg"
            alt="Illeppac S.A."
            class="clienteImg"
          ></a>

      </div>
    </v-layout>

  </section>

</template>

<script>
export default {};
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

h1,
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

#vineria {
  max-height: 70px;

  @media (max-width: 600px) {
    max-height: 40px;
  }
}

.titulo {
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 2em;
  color: $color-1;
}

.clienteImg {
  filter: grayscale(1);
  height: 80px;
  margin: 0.8em 1.3em;
  transition: filter 0.5s ease-in-out;

  &:hover {
    filter: grayscale(0);
  }

  @media (max-width: 600px) {
    max-height: 50px;
    margin: 0.8em 1.3em;
  }
}
</style>
