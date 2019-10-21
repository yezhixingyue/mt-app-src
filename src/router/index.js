import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import defaultPage from '@/layout/default.vue'
import changeCity from '@/page/changeCity.vue'
import Index from '@/page/index/index.vue'
import blank from '@/page/blank.vue'
import login from '@/components/blank/login.vue'
import registe from '@/components/blank/registe.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: 'index',
      children: [{
        path: 'index',
        name: 'index',
        component: Index
      }, {
        path: '/changeCity',
        name: changeCity,
        component: changeCity
      }, {
        path: '/s/:name',
        name: 'goods',
        component: () => import('@/page/goods.vue')
      }]
    },
    {
      path: '/blank',
      name: 'blank',
      component: blank,
      children: [{
        path: '/login',
        name: 'login',
        component: login
      }, {
        path: '/registe',
        name: 'registe',
        component: registe
      }]
    }
  ]
})
