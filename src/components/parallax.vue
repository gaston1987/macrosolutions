<template>

  <div class="text-center">
    <v-parallax
      class="mt-10"
      src="@/assets/parallax03.jpg"
    >
      <v-main>
        <v-card-text class="display-1 text--primary">
          <p class="text"> Somos una empresa dinámica con el objetivo de asistir técnica y administrativamente a pequeñas y medianas empresas de distintos rubros.

            Nuestra principal especialización se concreta en el diseño e implementación de estructuras de financiación e impositivas apropiadas para cada empresa de acuerdo a los ciclos que conlleva cada industria en particular.

          </p>

        </v-card-text>
      </v-main>
    </v-parallax>
  </div>

</template>

<style>
.text {
  line-height: 200%;
  font-size: 30px;
}

@media only screen and (max-width: 600px) {
  .text {
    line-height: 180%;
    font-size: 20px;
  }
}
</style>


