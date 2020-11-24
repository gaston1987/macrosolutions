<template>

  <v-app>
    <barIndex />
    <v-main>
      <router-view></router-view>
    </v-main>
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
