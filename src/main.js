// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import api from '@/api/index.js'

Vue.prototype.api = api
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.directive('document_click', {
  bind (el, bingding, vnode) {
    if (bingding.value) {
      document.addEventListener('click', bingding.value, false)
    }
  },
  inserted () {
    // console.log('inserted')
  },
  update () {
    // console.log('update')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app")
