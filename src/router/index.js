import Vue from 'vue'
import Router from 'vue-router'
import simu_cred from '@/components/simu_cred'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/simu_cred',
      name: 'simu_cred',
      component: simu_cred
    },
   

    { path: '/', redirect: '/inicio' }
  ]
})




