import {
	createStore
} from 'vuex'
import core from './core.js'
import message from './message.js'
import session from './session.js'

export default createStore({
	modules: {
		core,message,session
	}
})
