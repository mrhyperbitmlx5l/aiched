import * as utils from '@/utils/index'
import router from '@/router/index'
export default {
	namespaced: true,
	state: {
		token:"",
		limit: [{
			"id": "000101"
		}, {
			"id": "000102"
		}]
	},
	mutations: {
		setToken(state, token){
			state.token = token
		}
	},
	actions: {
		lockScreen({commit}) {
			//console.log("[lockScreen]=========>")
			utils.setToken("")
			commit('setToken',"")
			router.push('/login').catch(err => {
					err;
			});
		}
	}
}
