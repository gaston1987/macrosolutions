<template>
<div id="servicio">
  <h1 class="text-center " >Servicios </h1>
  <v-row justify="center" >
    <v-col  sm="12" md="4" lg="3" class="mx-5 mb-10">
      <v-card
        elevation="3"
        outlined
        shaped
        min-height="250px"
        color="blue-grey lighten-5"
      >
        <v-card-text>
          <h2 class="text--primary">Organización</h2>
          <p></p>
          <div class="text--primary">
            Organización y estructuración del flujo de caja de la compañía.
          </div> <p></p>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="reveal = true">
            <i style="font-size: 40px" class="fas fa-sitemap"></i>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col  sm="12" md="4" lg="3" class="mx-5">
      <v-card
        elevation="3"
        outlined
        shaped
        min-height="250px"
        color="blue-grey lighten-5"
      >
        <v-card-text>
          <h2 class="text--primary">Análisis de costos</h2>
          <p></p>
          <div class="text--primary">
            Análisis de costos de oportunidad y rentabilidad de trabajos que
            realiza cada compañía.
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="reveal = true">
            <i style="font-size: 40px" class="fas fa-chart-pie"></i>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col sm="12" md="4" lg="3" class="mx-5">
      <v-card
        elevation="3"
        outlined
        shaped
        min-height="250px"
        color="blue-grey lighten-5"
      >
        <v-card-text>
          <h2 class="text--primary">Elaboración de modelos</h2>

          <div class="text--primary">
            Elaboración de modelos económicos/ financieros que permitan que la
            compañía pueda decidir si afrontar o no un trabajo.
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="reveal = true">
            <i style="font-size: 40px" class="fas fa-wallet"></i>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

 <v-col sm="12" md="4" lg="3" class="mx-5">
      <v-card
        elevation="3"
        outlined
        shaped
        min-height="250px"
        color="blue-grey lighten-5"
      >
       <v-card-text>
          <h2 class="text--primary">Análisis impositivos</h2>
          <p></p>
          <div class="text--primary">
            Análisis impositivos de cada trabajo que realiza la compañía
          </div><p></p>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="reveal = true">
            <i style="font-size: 40px" class="far fa-lightbulb"></i>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>


     <v-col sm="12" md="4" lg="3" class="mx-5">
      <v-card
        elevation="3"
        outlined
        shaped
        min-height="250px"
        color="blue-grey lighten-5"
      >
        <v-card-text>
          <h2 class="text--primary">Análisis de herramientas</h2>

          <div class="text--primary">
            Análisis de distintas herramientas de financiación.
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="reveal = true">
            <i style="font-size: 40px" class="far fa-plus-square"></i>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

     <v-col sm="12" md="4" lg="3" class="mx-5 mb-10">
      <v-card
        elevation="3"
        outlined
        shaped
        min-height="250px"
        color="blue-grey lighten-5"
      >
        <v-card-text>
          <h2 class="text--primary">Análisis de activos </h2>
          <p></p>
          <div class="text--primary">
            Análisis de activos y pasivos de la compañía.
          </div><p></p>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="reveal = true">
            <i style="font-size: 40px" class="far fa-building"></i>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col sm="12" md="4" lg="3" class="mx-5 ">
      <v-card
        elevation="3"
        outlined
        shaped
        min-height="250px"
        color="blue-grey lighten-5"
      >
       <v-card-text>
          <h2 class="text--primary">Estructuración</h2>
     
          <div class="text--primary">
            Estructuración de planes estratégicos que colaboren en la correlación 
            entre el flujo de ingresos y las cuentas a pagar de la compañía.
          </div><p></p>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="reveal = true">
            <i style="font-size: 40px" class="fas fa-coins"></i>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>


     <v-col sm="12" md="4" lg="3" class="mx-5">
      <v-card
        elevation="3"
        outlined
        shaped
        min-height="250px"
        color="blue-grey lighten-5"
      >
        <v-card-text>
          <h2 class="text--primary">Estructura de capital</h2>
          <div class="text--primary">
           Optimizar la estructura de capital con el objetivo de financiar actividades de acuerdo al 
           flujo de ingresos a generar con la inversión y al plazo de recupero de la misma.
          </div><p></p>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="reveal = true">
            <i style="font-size: 40px" class="fab fa-stack-exchange"></i>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

     <v-col sm="12" md="4" lg="3" class="mx-5">
      <v-card
        elevation="3"
        outlined
        shaped
        min-height="250px"
        color="blue-grey lighten-5"
      >
        <v-card-text>
          <h2 class="text--primary"> Redes de venta</h2>
          
          <div class="text--primary">
            Armado de redes de venta y comercialización en todo el país con asistencia
             financiera directa al consumidor final.
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="reveal = true">
            <i style="font-size: 40px" class="fas fa-share-alt-square"></i>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

  </v-row>

</div>
</template>

<style>
h2 {
  padding-bottom: 15px;
  font-weight: 400;
  font-size: 28px;
  line-height: 30px;
}
</style>

