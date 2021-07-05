import REGISTER from '../register/index.js'
import * as utils from '@/utils/index'
export default {
	namespaced: true,
	state: {
		applications: [],
		tasklist: [],
	},
	mutations: {
		init(state) {
			//console.log("=======>" + JSON.stringify(REGISTER))
			REGISTER.application.forEach(item => {
				let app = {}
				app.id = item.id
				app.name = item.name
				app.icon = item.icon
				app.width = item.width > 0 ? item.width : 0
				app.height = item.height > 0 ? item.height : 0
				app.page = item.page
				app.selected = false
				state.applications.push(app)
			})
		},
		selectIcon(state, id) {
			state.applications.forEach(item => {
				if (id == item.id) {
					item.selected = true
				} else {
					item.selected = false
				}
			})
		},
		getTask(state, id) {
			state.tasklist.forEach(function(item) {
				if (item.id == id) {
					return item
				}
			})
		},
		focusApplication(state, id) {
			let flag = false
			let last = -1
			state.tasklist.forEach(function(item,index) {
				if ((!utils.StringIsNull(id) && item.id == id && !item.hidden)) {
					item.focus = true
					flag = true
				} else {
					item.focus = false
				}
				if(!item.hidden){
					last = index
				}				
			})
			//console.log(id +"  item2========>" + last + "===>" + JSON.stringify(state.tasklist))
			if(!flag && last >= 0 && state.tasklist.length >= 1) {
				state.tasklist[last].focus = true		
			} 
		},
		openApplication(state, id) {
			let t = state.tasklist.filter(t => t.id == id)
			if(utils.ObjectIsNull(t) && (state.tasklist.length <= REGISTER.MAXTASK)){
				let object = state.applications.filter(t => t.id == id)[0]
				let app = {}
				app.id = object.id
				app.width = object.width
				app.height = object.height
				app.title = object.name
				app.icon = object.icon
				app.page = utils.ObjectIsNull(object.page) ? "":object.page
				app.hidden = false
				app.focus = true
				state.tasklist.push(app)
			}
		},
		showOrhiddenApplication(state, id) {
			state.tasklist.forEach(function(item) {
				if (item.id == id) {
					if(item.hidden == false && item.focus){
						item.hidden = true
					} else {
						item.hidden = false
					}
				}
			})
		},
		closeApplication(state, id) {
			state.tasklist.forEach(function(item, i) {
				//console.log('forEach===========>' + i)
				if (item.id == id) {
					state.tasklist.splice(i, 1)
				}
			})
			//console.log("state.tasklist2========>" + JSON.stringify(state.tasklist))
			//		
		}
	},
	actions: {
		focusTask({commit}, id){
			commit('showOrhiddenApplication', id)
			commit('focusApplication', id)
		},
		showOrhidden({commit}, id){
			commit('showOrhiddenApplication', id)
			commit('focusApplication', '')
		},
		selectIcon({commit}, id) {
			commit('selectIcon', id)
		},
		openTask({commit}, id) {
			commit('openApplication', id)
			commit('focusApplication', id)
		},
		closeTask({commit}, id) {
			commit('closeApplication', id)
			commit('focusApplication', '')
		}
	},
}
