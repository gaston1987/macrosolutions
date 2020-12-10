import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import LoadScript from 'vue-plugin-load-script';
import Vuetify from 'vuetify/lib'

Vue.use(LoadScript);
// importo smooth scroll
import VueSmoothScroll from 'vue2-smooth-scroll'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(VueSmoothScroll, {
  duration: 900,
  updateHistory: false,
})


Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
