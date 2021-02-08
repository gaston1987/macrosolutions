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
            max-width="280"
            contain
            style="margin:0 auto;"
            position="center"
            src="@/assets/marca_final2021.png"
            class="animate__animated animate__fadeInUp"
          ></v-img>
        
          <v-spacer></v-spacer>

          <v-card-text
           
            style="margin-top:20px; text-align:center;font-size:18px"
          >
            Somos una empresa dinámica con el objetivo de asistir técnica y administrativamente a pequeñas y medianas empresas de distintos rubros.

            Nuestra principal especialización se concreta en el diseño e implementación de estructuras de financiación e impositivas apropiadas para cada empresa de acuerdo a los ciclos que conlleva cada industria en particular.
          </v-card-text>
        </v-card>

      </v-col>
     
      <v-col class="col-md-3 col-xs-12">
        <v-card flat>
          <router-link to="/landingAlianza">
          <v-img
            style="margin:0 auto;"
            max-width="180"
            contain
            position="center"
            src="@/assets/ALIANZA_FINAL.png"
            class="animate__animated animate__fadeInUp"
          ></v-img>
            </router-link>

          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>

          <v-card-text>
            <v-row>
              <p
             
                style="text-align:center;font-size:18px;margin-top:10px;"
              > Alianza es la unidad de micro créditos de Macrosolutions donde asistimos financieramente al cliente final de cada comercio o PYME con la que trabajamos.</p>
            </v-row>
          </v-card-text>
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