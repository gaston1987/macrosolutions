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
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://i.postimg.cc/k5ckntLF/sup001.jpg',
        },
        {
          src: 'https://i.postimg.cc/NF2vcfQp/conference-room-768441-1920.jpg',
        },
        {
          src: 'https://i.postimg.cc/7LXk1WBM/digital-marketing-1725340-1920.jpg',
        },
        {
          src: 'https://wallpapercave.com/wp/wp2128226.jpg',
        },
      ],
    }
  },
}
</script>


