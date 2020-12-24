<template>
  <v-navigation-drawer
    absolute
    color="transparent"
    height="auto"
    overlay-color="secondary"
    overlay-opacity=".7"
    temporary
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list
      color="white"
      nav
      dense
    >
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          class="boton"
          v-for="item in items"
          :key="item.link"
          :href="item.link"
          :to="item.link"
        >
          <v-list-item-content>
            <v-list-item-title
              class="text--primary"
              v-text="item.label"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'HomeDrawer',

  data: () => ({
    selectedItem: 1,
  }),

  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>

<style scoped>
.boton {
  font-size: 30px im !important;
  font-weight: bold;
  text-transform: uppercase !important;
}
</style>
