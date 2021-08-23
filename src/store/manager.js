import REGISTER from '../register/index.js'
import * as utils from '@/utils/index'
export default {
	namespaced: true,
	state: {
		dateFormat: 'YYYY-MM-DD',
		startMenu: false,
		wallpaper: "",
		contextMenu: {
			type: 'wall',
			x: 0,
			y: 0,
			data: {}
		},
		applications: [],
		tasklist: [],
		//commonlyUsed: []
	},
	mutations: {
		init(state) {
			let wallpaper = utils.getLocalstorage('wallpaper',"")
			state.wallpaper = wallpaper
			//console.log("=======>" + JSON.stringify(REGISTER))
			REGISTER.application.forEach(item => {
				let app = {}
				if(item.sublist||item.type==='folder'){
					item.sublist.forEach(subitem => {
						app = {}
						app.id = subitem.id
						app.name = subitem.name
						app.icon = subitem.icon
						app.width = subitem.width > 0 ? subitem.width : 0
						app.height = subitem.height > 0 ? subitem.height : 0
						app.page = subitem.page
						app.link = !utils.ObjectIsNull(subitem.link) ? false : subitem.link
						app.selected = false
						state.applications.push(app)
					})
				} else {
					app.id = item.id
					app.name = item.name
					app.icon = item.icon
					app.width = item.width > 0 ? item.width : 0
					app.height = item.height > 0 ? item.height : 0
					app.page = item.page
					app.link = !utils.ObjectIsNull(item.link) ? false : item.link
					app.selected = false
					state.applications.push(app)
				}
			})
			//state.commonlyUsed = JSON.parse(utils.getLocalstorage('commonlyUsed','[]'))
		},
		selectIcon(state, id) {
			state.applications.forEach(item => {
				if (id == item.id) {
					item.selected = true
				} else {
					item.selected = false
				}
			})
			if (state.startMenu) {
				state.startMenu = false
			}
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
			state.tasklist.forEach(function(item, index) {
				if ((!utils.StringIsNull(id) && item.id == id && !item.hidden)) {
					item.focus = true
					flag = true
				} else {
					item.focus = false
				}
				if (!item.hidden) {
					last = index
				}
			})
			//console.log(id +"  item2========>" + last + "===>" + JSON.stringify(state.tasklist))
			if (!flag && last >= 0 && state.tasklist.length >= 1) {
				state.tasklist[last].focus = true
			}
		},
		openApplication(state, id) {
			let temp = state.tasklist.filter(t => t.id == id)
			if (utils.ObjectIsNull(temp) && (state.tasklist.length <= REGISTER.MAXTASK)) {
				let object = state.applications.filter(t => t.id == id)[0]
				let app = {}
				//console.log("object===>" + JSON.stringify(state.applications) + "====>" + id)
				app.id = object.id
				app.width = object.width
				app.height = object.height
				app.title = object.name
				app.icon = object.icon
				app.page = utils.ObjectIsNull(object.page) ? "" : object.page
				app.hidden = false
				app.focus = true
				state.tasklist.push(app)
			}
		},
		hiddenApplication(state, id) {
			state.tasklist.forEach(function(item) {
				if (item.id == id) {
					if (item.hidden == false) {
						item.hidden = true
					}
				}
			})
		},
		showOrhiddenApplication(state, id) {
			state.tasklist.forEach(function(item) {
				if (item.id == id) {
					if (item.hidden == false && item.focus) {
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
		},
		openStartMenu(state) {
			state.startMenu = !state.startMenu
		},
		setContextMenu(state, data) {
			state.contextMenu.x = data.x
			state.contextMenu.y = data.y
			state.contextMenu.type = data.type
			state.contextMenu.data = data.data
		},
		cleanContextMenu(state) {
			state.contextMenu.x = -1
			state.contextMenu.y = -1
			state.contextMenu.type = ''
			state.contextMenu.data = {}
		},
		setWallpaper(state, url){
			utils.setLocalstorage('wallpaper',url)
			state.wallpaper = url
		}
	},
	actions: {
		focusTask({	commit }, id) {
			commit('focusApplication', id)
			commit('selectIcon', '')
			commit('cleanContextMenu')
		},
		showOrhidden({commit}, id) {
			commit('showOrhiddenApplication', id)
			commit('focusApplication', id)
		},
		selectIcon({commit}, id) {
			commit('selectIcon', id)
		},
		openTask({commit}, id) {
			commit('openApplication', id)
			commit('focusApplication', id)
		},
		minTask({commit}, id) {
			commit('hiddenApplication', id)
			commit('focusApplication', id)
		},
		closeTask({commit}, id) {
			commit('closeApplication', id)
			commit('focusApplication', '')
		},
		nextWall({commit}) {
			commit('randomWall')
		},
		help({commit}) {
			commit('openApplication', '0000')
			commit('focusApplication', '0000')
		},
		display({commit}) {
			commit('openApplication', '0001')
			commit('focusApplication', '0001')
		}
	},
}
