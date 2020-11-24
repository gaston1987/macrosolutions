<template>
  <div class="d-flex align-center">
    <v-text-field
      dense
      rounded
      background-color="blue"
      flat
      solo-inverted
      hide-details
      clearable
      prepend-inner-icon="mdi-magnify"
      label="Buscar"
      v-model="search"
      @change="onSearch"
    ></v-text-field>

  </div>

</template>

<script>
export default {
  name: 'searchBar',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    onSearch () {
      // eslint-disable-next-line no-console
      console.log(['onSearch()'])
      this.$router.push({ name: "plu-main", query: { search: this.search } })
        .catch(() => { })
    }
  }
}
</script>
