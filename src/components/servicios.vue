<template>

  <v-row justify="center"
  pt-5
  >
 
    <v-col
      cols="6"
      sm="3"
      md="3"
      lg="3"
      pr-10
      
   
    >
      <v-card
  elevation="5"
  outlined
  shaped
  pr-10
  min-height="280px"
  color="blue-grey lighten-5"

  
>

<v-card-text>
    
      <p class="display-1 text--primary">
        Organización
      </p>
      
      <div class="text--primary">
        Organización y estructuración del flujo <br>de caja de la compañía.
        
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
        align-center
      >
       <i style="font-size:40px;" class="fas fa-paper-plane"></i>
      </v-btn>
    </v-card-actions>
</v-card>
</v-col>

<v-col
      cols="6"
      sm="3"
      md="3"
      lg="3"
    
    >
<v-card
  elevation="5"
  outlined
  shaped
   min-height="280px"
   color="blue-grey lighten-5"
>

<v-card-text>
     
      <p class="display-1 text--primary">
        Análisis de costos
      </p>
      <p></p>
      <div class="text--primary">
        Análisis de costos de oportunidad y
       rentabilidad de trabajos que realiza cada compañía.
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        <i style="font-size:40px;" class="fas fa-chart-pie"></i>
      </v-btn>
    </v-card-actions>
</v-card>
</v-col>

<v-col
      cols="6"
      sm="3"
      md="3"
      lg="3"
    
    >
<v-card
  elevation="5"
  outlined
  shaped
  min-height="280px"
  color="blue-grey lighten-5"
>

<v-card-text>
     
      <p class="display-1 text--primary">
        Elaboración de modelos 
      </p>
    
      <div class="text--primary">
      Elaboración de modelos económicos/ financieros que permitan que la compañía pueda decidir si afrontar o no un trabajo.
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
       <i style="font-size:40px;" class="fas fa-wallet"></i>
      </v-btn>
    </v-card-actions>
</v-card>

</v-col>

  </v-row>
</template>


