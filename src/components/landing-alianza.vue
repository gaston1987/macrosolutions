<template>

  <div id="landing-alianza">
    <v-row>
      <v-col>
        <v-card
          class="prestamocard mx-auto mt-10"
          width="90%"
        >

          <v-card-text class="display-1 text--primary text-center">
            <h1 style="color:#FFFFFF;font-size:30px;"><strong>PRÉSTAMOS PERSONALES</strong></h1><br>
            <h1 style="color:#D81B60;font-size:50px;"><strong>EN EFECTIVO</strong></h1><br>
            <p class="text">
              ¡Prestamos personales, hasta $100.000 por débito automático, Presentando tus últimos 2 recibos de sueldos y el detalle de los movimientos bancarios de los últimos dos meses!
            </p>
            <v-img
              src="@/assets/presta_1.png"
              contain
              position="center"
              class="animate__animated animate__fadeInUp"
            />

          </v-card-text>
        </v-card>

      </v-col>
      <v-col class="col-md-6 col-xs-12">
        <simucred>
        </simucred>
      </v-col>
    </v-row>
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
  color: white !important;
}
</style>




