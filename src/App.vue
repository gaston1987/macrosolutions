<template>

  <v-app>
    <barIndex />

  </v-app>

</template>

<script>

import barIndex from './components/barIndex';
export default {
  name: 'App',

  components: {
    barIndex,
  },

  data: () => ({
    //
  }),
};
</script>
