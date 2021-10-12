import helper from '@/utils/helper'

export default {
	namespaced: true,
	state: {
		token:"",//会话标记
		loadShow:true,
		date:new Date()
	},
	mutations: {
		CLOSE_LOAD_SHOW(state){
			state.loadShow = false
		},
		SET_TOKEN(state, token){
			state.token = token
		}
	},
	actions: {
		login({commit}, str) {
			helper.setToken(str)
			commit('SET_TOKEN',str)
		},
		closeLoadShow({commit}){
			commit('CLOSE_LOAD_SHOW')
		},
		lockScreen({commit}){
			commit('SET_TOKEN','')
		}
	}
}