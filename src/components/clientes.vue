<template>
<div id="clientes">
  <v-container
    fluid
    class="my-8"
    
  >
  <v-sheet
    class="mx-auto"
    flat
    max-width="100%"
  >
    <v-sheet
        
      >  <h1 class="text-center " >Clientes </h1>
      
      </v-sheet> 

       <v-slide-group multiple show-arrows>
      <v-slide-item
        v-for="n in 25"
        :key="n"
       
      >
      
      <v-row>

        <v-col
      
        >
        <v-card 
        flat 
        :loading="loading">
        <a
          target="_blank"
          href=""
        > <img
            src="@/assets/tm.jpeg"
            alt="Todo Moto SRL"
            class="clienteImg"
          > </a>
        </v-card>


        </v-col>

          <v-col>
        <v-card 
        flat
        :loading="loading">
        <a
          target="_blank"
          href=""
        > <img
            src="@/assets/eq.jpeg"
            alt="Todo Moto SRL"
            class="clienteImg"
          > </a>
        </v-card>


        </v-col>


        <v-col>
        <v-card 
        flat
        :loading="loading">
        <a
          target="_blank"
          href=""
        > <img
            src="@/assets/rabonera.png"
            alt="Todo Moto SRL"
            class="clienteImg"
          > </a>
        </v-card>


        </v-col>

             <v-col>
        <v-card 
        flat
        :loading="loading">
        <a
          target="_blank"
          href=""
        > <img
            src="@/assets/illeppac.jpg"
            alt="Todo Moto SRL"
            class="clienteImg"
          > </a>
        </v-card>


        </v-col>

        </v-row>

      </v-slide-item>


    </v-slide-group>
  </v-sheet>
  </v-container>
</div>
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

h1{
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
</style>