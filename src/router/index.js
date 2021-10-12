import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import $store from '@/store';

const routes = [{
		path: '/',
		meta: {title: $store.state.core.name},
		component: () => import('../views/Desktop.vue')
	},
	{
		path: '/desktop',
		meta: {title: $store.state.core.name},
		component: () => import('../views/Desktop.vue')
	},
	{
		path: '/login',
		meta: {title: '欢迎登陆'},
		component: () => import('../views/LockScreen.vue')
	},
	{
		path: '/test',
		meta: {title: $store.state.core.name},
		component: () => import('../views/Desktop.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

const WHITE_LIST = ['/login']

router.beforeEach((to, from, next) => {
	//console.log('===>' + JSON.stringify(to));
	if (to.meta) {
		document.title = to.meta.title
	}
	let token = $store.state.session.token
	if (token.length > 0 || WHITE_LIST.indexOf(to.path) !== -1) {
		next()
	} else {
		next(`/login`)
	}
})

export default router
