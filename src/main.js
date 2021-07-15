import Vue from 'vue'
import Monitor from './Monitor.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import animate from 'animate.css'


Vue.config.productionTip = false
Vue.use(animate)
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(Monitor)
}).$mount('#monitor')
