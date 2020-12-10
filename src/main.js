import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);
// importo smooth scroll
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueSmoothScroll, {
  duration: 900,
  updateHistory: false,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
