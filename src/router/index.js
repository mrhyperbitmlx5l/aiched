import Vue from 'vue'
import VueRouter from 'vue-router'
import Desktop from '../views/Desktop.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Desktop',
    component: Desktop
  },
  {
    path: '/lockScreen',
    name: 'LockScreen',
    component: () => import(/* webpackChunkName: "about" */ '../views/LockScreen.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
