import Vue from 'vue'
import Router from 'vue-router'
import Desktop from '../views/Desktop.vue'
import * as utils from '@/utils/index'

//import store from '@/store'

Vue.use(Router)
const router = new Router({
	//mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: '/',
			redirect: '/desktop'
		},
		{
			path: '/desktop',
			name: 'Desktop',
			component: Desktop
		},
		{
			path: '/login',
			name: 'LockScreen',
			component: () => import( /* webpackChunkName: "about" */ '../views/LockScreen.vue')
		}
	]
})

const whiteList = ['/login'] //

router.beforeEach((to, from, next) => {
	if (to.name) {
		document.title = to.name
	}
	//store.commit('app/setRouteLoading', true)
	let token = utils.getToken()
	//console.log('token=>' + token + '    to=>' +to.path)
	if (token.length > 0 || whiteList.indexOf(to.path) !== -1) { // 无会话，不是白名单
		next()
	} else {
		next(`/login`)
	}
})

router.afterEach(() => {
	//store.commit('app/setRouteLoading', false)
})


export default router
