import * as logsApi from '@/api/logs'
import MESSAGECODE from '@/api/messageCode'

export default {
	namespaced: true,
	state: {
		loading: false,
		list: [],
		pagination: {
			total: 0,
			current: 1,
			pageSize: 10,
			pageSizeOptions: ['10', '20', '30', '40'],
			showSizeChanger: true,
			showTotal: (total, range) => `第 ${range[0]} 至 ${range[1]} 条-共 ${total} 条`
		}
	},
	mutations: {
		setTableLoading(state, b) {
			state.loading = b
		},
		setPagination(state, pagination) {
			state.pagination = pagination
		},
	},
	actions: {
		list({
			commit,
			state
		}, listQuery) {
			commit('setTableLoading', true)
			let query = Object.assign(listQuery, {
				'page': state.pagination.current,
				'size': state.pagination.pageSize
			});
			logsApi.logslist(query).then(response => {
				if (MESSAGECODE.SUCESS === response.data.code) {
					state.list = response.data.data.list
					state.pagination.total = response.data.data.total
					state.pagination.current = response.data.data.page
					commit('setTableLoading', false)
				} else {
					commit('setTableLoading', false)
					commit('app/setMessage', {
						type: 'error',
						context: response.data.message
					}, {
						root: true
					})
				}
			})
		}
	},
	getters: {

	}
}
