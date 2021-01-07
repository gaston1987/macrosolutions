<template>
  <div id="requisitos">
    <h1 class="text-center">¡Sacá tu credito en pocos pasos!</h1>
    <h2 class="text-center">Presentando:</h2>
    <v-row justify="center" class="mt-10">
      <v-col class="col-md-3 col-xs-12">
        <v-img
          src="@/assets/dni01.png"
          contain
          max-height="180px"
          position="center"
          style="padding-top: 50px"
          class="animate__animated animate__fadeInUp"
        />
      <h3> 
            Fotocopia del DNI
        </h3>

       
      </v-col>

      <v-col class="col-md-3 col-xs-12">
        <v-img
          src="@/assets/sueldo01.png"
          contain
          max-height="180px"
          position="center"
          style="padding-top: 50px"
          class="animate__animated animate__fadeInUp"
        />
        <h3> 
            Ultimos recibos de sueldo
        </h3>
      </v-col>

      <v-col class="col-md-3 col-xs-12">
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
      </v-col>
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