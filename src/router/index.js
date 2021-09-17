import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import store from '@/store';

const routes = [{
		path: '/',
		meta: {title: store.state.core.name},
		component: () => import('../views/Desktop.vue')
	},
	{
		path: '/desktop',
		meta: {title: store.state.core.name},
		component: () => import('../views/Desktop.vue')
	},
	{
		path: '/login',
		meta: {title: store.state.core.name},
		component: () => import('../views/LockScreen.vue')
	},
	{
		path: '/test',
		meta: {title: store.state.core.name},
		component: () => import('../views/Desktop.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
