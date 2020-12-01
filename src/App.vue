<template>
<v-app>
  <v-main>
    <index />
    
  </v-main>
</v-app>
</template>

<script>

import index from '@/components/index';



export default {
  name: 'App',

  components: {
    index,
   
  },

  data: () => ({
    //
  }),
};
</script>
