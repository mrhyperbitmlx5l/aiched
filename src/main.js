import Vue from 'vue'
import Monitor from './Monitor.vue'
import router from './router'
import store from './store'
import animate from 'animate.css'

Vue.config.productionTip = false
Vue.use(animate)

new Vue({
  router,
  store,
  render: h => h(Monitor)
}).$mount('#monitor')
