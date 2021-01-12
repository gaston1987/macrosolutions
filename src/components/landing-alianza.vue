<template>

  <div id="landing-alianza">
    <requisitos />
    <v-row>

      <v-col class="col-md-3 col-xs-12">
        <v-img
          src="@/assets/presta_left01.png"
          contain
          width="300px"
          position="center"
          style="padding-top:50px;"
          class="animate__animated animate__fadeInUp"
        />
      </v-col>
      <v-col class="col-md-7 col-xs-12">
        <v-card
          elevation="0"
          class="prestamocard mx-auto mt-10"
          width="100%"
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

    <v-row>

      <v-img
        src="@/assets/prestabottom01.png"
        contain
        max-width="800px"
        position="center"
        style="margin-top:-50px;padding-bottom:120px;margin:0 auto;"
        class="animate__animated animate__fadeInUp"
      />

    </v-row>

    <v-col class="col-md-12 col-xs-12">
      <simucred>
      </simucred>
    </v-col>
    <consulta />
    <div class="text-right">

      <dialogChat />
    </div>
  </div>

</template>
<script>

import requisitos from '@/components/requisitos.vue';
import dialogChat from '@/components/dialogChat';
import simucred from './simu_cred.vue';
import consulta from '@/components/consulta.vue';

export default {
  name: 'landingAlianza',

  components: {
    requisitos,
    simucred,
    consulta,
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
  color: #ffffff !important;
  font-family: "Nunito" !important;
}

#landing-alianza h1 {
  font-family: "Nunito" !important;
}

@media only screen and (max-width: 600px) {
  .text {
    font-size: 28px !important;
  }
  body {
    margin: 0 auto !important;
    overflow: hidden; /* Hide scrollbars */
  }

  #simucard {
    width: 100% !important;
  }

  #simucard h2 {
    font-size: 24px;
  }

  #requisitos {
    padding: 20px;
  }

  #cnscard {
    width: 90% !important;
  }

  #ingreso {
    width: 100% !important;
  }
}
</style>




