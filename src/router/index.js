import Vue from 'vue'
import Router from 'vue-router'
import barIndex from '@/components/barIndex'
import barAlianza from '@/components/bar-alianza'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BarIndex',
      component: barIndex
    },
    {
      path: '/landingAlianza',
      name: 'landingAlianza',
      component: barAlianza
    },


    { path: '/', redirect: '/inicio' }
  ]
})




