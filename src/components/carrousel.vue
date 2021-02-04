<template>
  <v-carousel
    hide-delimiters
    show-arrows-on-hover
    cycle
    dark
    continuous
    interval="5000"
    progress
    progress-color="secondary"
    class="mb-2 elevation-2"
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
 
  
<v-row
          class="fill-height"
          align="center"
          justify="center"
          
        >
  <div class="display-2"
  style="background-color:rgba(0, 0, 255, 0.6);padding-bottom:10px;border-radius: 20px;"
  
  >
  <div class="subt1" style="opacity:1.0; padding:5px;">
            <h2 align="center">MACRO SOLUTIONS</h2>
                <h3>Desarrollamos asistencia técnica y administrativa
                para pequeñas y medianas empresas</h3> </div>
          </div>
          </v-row>

</v-carousel-item>
</v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://i.postimg.cc/6Q72y00T/slide-1.jpg',
        },
        {
          src: 'https://i.postimg.cc/Hnkyzgms/slide-0002.jpg',
        },
     
        {
          src: 'https://i.postimg.cc/4dNznZjQ/slide004.jpg',
        },
      ],
    }
  },
}
</script>

<style>

.subt1 h3{
 
 font-size: 18px !important;
 color: #FFFFFF !important;
 font-style: normal !important;
 line-height: 22px;


}

.subt1 h2{
 
 font-weight: bold;
}
  
</style>


