import Vue from 'vue'
import Monitor from './Monitor.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import animate from 'animate.css'

/**
 * 当我们本地使用 Mock.js 模拟本地数据，线上使用真实环境 api 方法。
 * 这与上面的 easy-mock 的方法是差不多的。
 * 我们主要是判断：是线上环境的时候，不引入 mock 数据就可以了，只有在本地引入 Mock.js。
 */
if (process.env.NODE_ENV === 'development') {
	require('./mock') // simulation data
}

Vue.config.productionTip = false
Vue.use(animate)
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(Monitor)
}).$mount('#monitor')
