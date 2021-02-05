<template>
  <div id="requisitos">
    <h1 class="text-center">¡Sacá tu crédito en pocos pasos!</h1>
    <!-- <h2 class="text-center">Presentando:</h2> -->
    <v-row justify="center" class="mt-10">
      <v-col class="col-md-5 col-xs-12 offset-md-1"  >
        <v-img
          src="@/assets/presen.jpg"
          contain
          max-height="180px"
          position="center"
          style="padding-top: 50px"
          class="animate__animated animate__fadeInUp"
        />
      <h3> 
            Crédito Presencial
        </h3>
   <v-list flat  style="margin-top:20px;" >
       <v-list-item-group v-model="model">
              <v-list-item>
                <v-list-item-icon>
                      <v-icon  color="blue darken-2">mdi-check-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title >FOTOCOPIA DNI</v-list-item-title>
                    </v-list-item-content>

              </v-list-item>

               <v-list-item>
                <v-list-item-icon>
                       <v-icon  color="blue darken-2">mdi-check-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title >ULTIMOS RECIBOS DE SUELDO</v-list-item-title>
                    </v-list-item-content>

              </v-list-item>


               <v-list-item>
                <v-list-item-icon>
                      <v-icon  color="blue darken-2">mdi-check-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title >BOLETA DE SERVICIO</v-list-item-title>
                    </v-list-item-content>

              </v-list-item>


               <v-list-item>
                <v-list-item-icon>
                      <v-icon  color="blue darken-2">mdi-check-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>MOVIMIENTOS BANCARIOS</v-list-item-title>
                    </v-list-item-content>

              </v-list-item>
       
   </v-list-item-group>
       </v-list>

      </v-col>

      <v-col class="col-md-5 col-xs-12 offset-md-1">
        <v-img
          src="@/assets/virtual.jpg"
          contain
          max-height="180px"
          position="center"
          style="padding-top: 50px"
          class="animate__animated animate__fadeInUp"
        />
        <h3> 
            Crédito Online
        </h3>
        <v-list flat style="margin-top:20px;" >
       <v-list-item-group v-model="model" >
              <v-list-item>
                <v-list-item-icon>
                      <v-icon  color="blue darken-2">mdi-check-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title >FOTO DE DNI</v-list-item-title>
                    </v-list-item-content>

              </v-list-item>

               <v-list-item>
                <v-list-item-icon>
                       <v-icon  color="blue darken-2">mdi-check-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title >FOTO DE ULTIMO RECIBO DE SUELDO</v-list-item-title>
                    </v-list-item-content>

              </v-list-item>


               <v-list-item>
                <v-list-item-icon>
                      <v-icon  color="blue darken-2">mdi-check-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title >FOTO DE MOVIMIENTOS BANCARIOS</v-list-item-title>
                    </v-list-item-content>

              </v-list-item>


               <v-list-item>
                <v-list-item-icon>
                      <v-icon  color="blue darken-2">mdi-check-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>FOTO DE COMPROBANTE DE CBU</v-list-item-title>
                    </v-list-item-content>

              </v-list-item>
       
   </v-list-item-group>
       </v-list>
      </v-col>

      <!-- <v-col class="col-md-3 col-xs-12">
        <v-img
          src="@/assets/factura01.png"
          contain
          max-height="180px"
          position="center"
          style="padding-top: 50px"
          class="animate__animated animate__fadeInUp"
        />
         <h3> 
            Boleta de Servicio
        </h3>
      </v-col> -->
    </v-row>
  </div>
</template>

<style>
#requisitos {
  background-color: #ffffff;
  padding-top: 40px;
  padding-bottom: 60px;
}

#requisitos h1 {
  padding-top: 30px;
  font-family: "Nunito" !important;
}
#requisitos h2 {

  font-family: "Nunito" !important;
  color:rgb(216, 27, 96);
   padding-top: 10px;
   font-size: 24px;
}

#requisitos h3 {
  padding-top: 20px;
  font-family: "Nunito" !important;
  text-align:center;
  color: #484747;
}
</style>