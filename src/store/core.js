import {reactive} from 'vue'
import arrays from '../utils/arrays.js'
import helper from '../utils/helper.js'
import REGISTER from '../register/index.js'
export default  {
	namespaced: true,
	
	state:{
		name:"DogStar Windows 桌面 UI",
		dateFormat: 'YYYY-MM-DD',
		wallpaper: './wall/wall-1.jpg',
		startMenu: false,
		sidebar:false,
		contextMenu: {
			type: 'wall',
			x: 0,
			y: 0,
			data: {}
		},
		applications: [],
		tasks:reactive([])
	},
	mutations:{
		APP_INIT:(state)=> {
			let wallpaper = helper.getLocalstorage('wallpaper', "")
			state.wallpaper = wallpaper
			state.applications = []
			REGISTER.application.forEach(item => {
				let app = {}
				if (item.sublist || item.type === 'folder') {
					item.sublist.forEach(subitem => {
						app = {}
						app.id = subitem.id
						app.name = subitem.name
						app.icon = subitem.icon
						app.width = subitem.width > 0 ? subitem.width : 0
						app.height = subitem.height > 0 ? subitem.height : 0
						app.page = subitem.page
						app.resizable = helper.ObjectNotNull(subitem.resizable) ? subitem.resizable : true
						app.link = helper.ObjectNotNull(subitem.link) ? subitem.link :false 
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
					app.link = helper.ObjectNotNull(item.link) ?  item.link :false 
					app.resizable = helper.ObjectNotNull(item.resizable) ? item.resizable : true
					app.selected = false
					state.applications.push(app)
				}
			})
		},
		APP_OPEN:(state,id) => {
			let i = arrays.findIndexById(state.tasks,id)
			if(i < 0){
				let object = state.applications.filter(t => t.id == id)[0]
				let task = reactive({})
				task.title = object.name
				task.id = object.id
				task.icon = object.icon
				task.width = object.width
				task.height = object.height
				task.page = helper.ObjectNotNull(object.page) ? object.page : ""
				task.resizable = helper.ObjectNotNull(object.resizable) ? object.resizable : true
				task.min = false
				task.focus = true
				task.date = new Date()
				task.lastDate = new Date()
				state.tasks.push(task)
			}
		},
		APP_FOCUS:(state,id) => {
			let i = arrays.findIndexById(state.tasks,id)
			if(i < state.tasks.length) {
				let app = state.tasks[i]
				app.lastDate = new Date()
			}
		},
		APP_SORT_BY_DATE:(state) => {
			state.tasks.sort((a, b) => {
				return b.lastDate - a.lastDate
			})
		},
		APP_CLOSE:(state,id)=> {
			let i = arrays.findIndexById(state.tasks,id)
			if(i < state.tasks.length){
				arrays.deleteByIndex(state.tasks,i)
			}
		},
		APP_MIN_SWITCH:(state,id) => {
			let i = arrays.findIndexById(state.tasks,id)
			if(i < state.tasks.length){
				let app = state.tasks[i]
				if(app.focus == true){
					app.min = true
					app.lastDate = state.tasks[state.tasks.length - 1].lastDate - 1
				} else if(app.min == true){
					app.min = false
					app.lastDate = new Date()
				} else {
					app.lastDate = new Date()
				}
			}
		},
		OPEN_START_MENU(state) {
			state.startMenu = !state.startMenu
		},
		SELECT_ICON(state, id) {
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
		SET_CONTEXT_MENU(state, data) {
			state.contextMenu.x = data.x
			state.contextMenu.y = data.y
			state.contextMenu.type = data.type
			state.contextMenu.data = data.data
		},
		CLEAN_CONTEXT_MENU(state) {
			state.contextMenu.x = -1
			state.contextMenu.y = -1
			state.contextMenu.type = ''
			state.contextMenu.data = {}
		},
		SET_WALLPAPER(state, url) {
			helper.setLocalstorage('wallpaper', url)
			state.wallpaper = url
		},
		SWITCH_SIDEBAR(state,flag){
			if(helper.ObjectNotNull(flag)){
				state.sidebar = flag
			} else {
				state.sidebar = !state.sidebar
			}
		}
	},
	actions:{
		init(context){
			context.commit("APP_INIT")
		},
		close(context,id){
			context.commit("APP_CLOSE",id)
			context.commit("APP_SORT_BY_DATE")
		},
		focus(context,id) {
			context.commit("APP_FOCUS",id)
			context.commit("APP_SORT_BY_DATE")
		},
		minOrShow(context,id){
			context.commit("APP_MIN_SWITCH",id)
			context.commit("APP_SORT_BY_DATE")
		},
		minSwitch(context,id){
			context.commit("APP_MIN_SWITCH",id)
			context.commit("APP_SORT_BY_DATE")
		},
		selectIcon(context, id) {
			context.commit('SELECT_ICON', id)
		},
		openApp(context, id) {
			context.commit('APP_OPEN', id)
			context.commit('APP_SORT_BY_DATE', id)
		},
		sidebarSwitch(context,flag){
			context.commit('SWITCH_SIDEBAR',flag)
		},
		display(context) {
			context.commit('APP_OPEN', '0001')
			context.commit('APP_SORT_BY_DATE', '0001')
		},
		help(context) {
			context.commit('APP_OPEN', '9999')
			context.commit('APP_SORT_BY_DATE', '9999')
		},
		about(context) {
			context.commit('APP_OPEN', '0000')
			context.commit('APP_SORT_BY_DATE', '0000')
		},
	}
}
