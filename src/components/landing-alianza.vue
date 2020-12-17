<template>

  <div id="landing-alianza">
    <v-row>


      <v-col class="col-md-3 col-xs-12"> 
           <v-img
              src="@/assets/presta_left.png"
              contain
              width="300px"
              position="center"
              style="padding-top:50px;"
              
              class="animate__animated animate__fadeInUp"
            />
            </v-col>


      <v-col class="col-md-9 col-xs-12"> 
        <v-card
          elevation="0"
          class="prestamocard mx-auto mt-10"
          width="90%"
        >

          <v-card-text class="display-1 text--primary text-center">
            <h1 style="color:rgb(44, 31, 119);font-size:30px;"><strong>PRÉSTAMOS PERSONALES</strong></h1><br>
            <h1 style="color:#D81B60;font-size:50px;"><strong>EN EFECTIVO</strong></h1><br>
            <p class="text">
              ¡Prestamos personales, hasta $100.000 por débito automático, Presentando tus últimos 2 recibos de sueldos y el detalle de los movimientos bancarios de los últimos dos meses!
            </p>
           

          </v-card-text>
        </v-card>
          </v-col>
    
</v-row>
      
      <v-col class="col-md-12 col-xs-12">
        <simucred>
        </simucred>
      </v-col>
    
    <div class="text-right">

      <dialogChat />
    </div>
  </div>

</template>
<script>
import dialogChat from '@/components/dialogChat';
import simucred from './simu_cred.vue';
export default {
  name: 'landingAlianza',

  components: {
    simucred,
    dialogChat,

  },
}
</script>

<style>
.prestamocard {
  background-color: transparent !important;
  box-shadow: 0px !important;
}
.text {
  color:#ffffff !important;
  font-family: "Nunito" !important;
  
}

#landing-alianza h1{
    font-family: "Nunito" !important;
}
</style>




