<template>

  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>

</template>

<!-- 
<template>
  <barIndex />
</template>-->



<script>
import barIndex from '@/components/barIndex'

export default {
  name: "index",

  components: {
   barIndex
  },

  data: () => ({}),
};
</script>