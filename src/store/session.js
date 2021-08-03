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

	}
}
