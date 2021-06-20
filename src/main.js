import Vue from 'vue'
import Monitor from './Monitor.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Monitor)
}).$mount('#monitor')
