<template>
  <div id="requisitos">

    <v-row
      justify="center"
      class="mt-10"
    >
      <v-col class="col-md-5 col-xs-12 mt-10">
        <v-img
          src="@/assets/consulta01.png"
          contain
          max-height="304px"
          position="center"
          style="padding-top: 50px"
          class="animate__animated animate__fadeInUp"
        />

      </v-col>

      <v-col class="col-md-5 col-xs-12">
        <h1>Consulta el estado de tu credito y recibi los datos al instante</h1>
        <v-card
          elevation="0"
          class="mt-5"
        >
          <v-item>

            <h2>
              <v-icon style="font-size:50px; padding-right:15px">mdi-laptop-chromebook</v-icon> Ingresa a nuestra web
            </h2>
          </v-item>
          <v-item>
            <h2>
              <v-icon style="font-size:50px; padding-right:15px">mdi-form-textbox-password</v-icon>Coloca tus datos
            </h2>
          </v-item>
          <v-item>
            <h2>
              <v-icon style="font-size:50px; padding-right:15px">mdi-printer</v-icon>Obtene la información
            </h2>
          </v-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style>
#requisitos {
  background-color: #ffffff;
}

#requisitos h1 {
  padding-top: 30px;
  font-family: "Nunito" !important;
}
#requisitos h2 {
  font-family: "Nunito" !important;
  color: #2c1f77;
  padding-top: 10px;
  font-size: 24px;
}

#requisitos h3 {
  padding-top: 20px;
  font-family: "Nunito" !important;
  text-align: center;
  color: #484747;
}
</style>