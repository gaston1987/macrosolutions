<template>

  <v-app>
    
    <barIndex />
    <servicios />
  </v-app>

</template>

<script>

import barIndex from './components/barIndex';
import servicios from './components/servicios';
export default {
  name: 'App',

  components: {
    barIndex,
    servicios,
  },

  data: () => ({
    //
  }),
};
</script>
