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
			REGISTER.forEach(item => {
				let app = {}
				app.id = item.id
				app.name = item.name
				app.icon = item.icon
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
			let o = {} 
			state.tasklist.forEach(function(item) {
				if (item.id == id) {
					o = item
				}
			})
			//console.log(JSON.stringify(o))
			if (!utils.ObjectIsNull(o)) {
				state.tasklist.forEach(function(item, i) {
					//console.log('forEach===========>' + i)
					if (item.id == id) {
						state.tasklist.splice(i, 1)
					}
				})
				state.tasklist.push(o)
			}
		},
		openApplication(state, id) {
			let object = state.applications.filter(t => t.id == id)[0]
			let app = {}
			app.id = object.id
			app.width = object.width > 0 ? object.width : 0
			app.hight = object.hight > 0 ? object.hight : 0
			app.title = object.name
			app.icon = object.icon
			app.hidden = false;
			state.tasklist.push(app)
		},
		showApplication(state, id) {
			state.tasklist.forEach(function(item) {
				if (item.id == id) {
					item.hidden = false
				}
			})
			//this.focusApplication(state, id)
		},
		hideApplication(state, id) {
			state.tasklist.forEach(function(item) {
				if (item.id == id) {
					item.hidden = true
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


	},
}
