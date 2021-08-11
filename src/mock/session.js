import {
	//param2Obj,
	formatMessage,
	//formatPaging
} from '@/mock/mockutils'
import * as utils from '@/utils/index'

const userMap = {
	admin: {
		roles: ['admin'],
		token: 'admin',
		introduction: '我是超级管理员',
		avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
		name: 'Super Admin'
	},
	editor: {
		roles: ['editor'],
		token: 'editor',
		introduction: '我是编辑',
		avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
		name: 'Normal Editor'
	}
}

const userinfo = {
	email: "test@126.com",
	id: "dsf311111111111",
	loginname: "admin",
	mobile: "13426788991",
	modifyDate: "2020-02-03 15:18:45",
	name: "管理员",
	offices: [{
			code: "0000",
			id: "dfsdafsd111",
			key: "0000",
			title: "一级部门"
		},
		{
			code: "0000-0002",
			id: "dfsdafsd111",
			key: "0000-0002",
			title: "二级部门"
		},
		{
			code: "0000-0002-0005",
			id: "dfsdafsd111",
			key: "0000-0002-0005",
			title: "三级部门"
		}
	],
	roles: {
		keyCode: "00001111",
		roleName: "管理员",
		limits: [{
				key: "00101",
				name: "11111"
			},
			{
				key: "00102",
				name: "11111"
			},
			{
				key: "00201",
				name: "11111"
			},
			{
				key: "00202",
				name: "11111"
			},
			{
				key: "00203",
				name: "11111"
			},
			{
				key: '00302',
				name: 'dddfd'
			},
			{
				key: '00301',
				name: 'dddfd'
			},
			{
				key: '00303',
				name: 'dddfd'
			},
			{
				key: '00304',
				name: 'dddfd'
			},
			{
				key: '00305',
				name: 'dddfd'
			},
			{
				key: '00501',
				name: 'dddfd'
			}
		]
	}
}

export default {
	login: () => {
		//const {	username} = JSON.parse(config.body)
		utils.setToken('login')
		return formatMessage(userinfo, 'OK')
	},
	register: () => {
		return formatMessage({}, 'OK')
	},
	uniqueVerify: () => {
		//return  formatErrorMessageCode('0x00004',{}, 'OK')
		return formatMessage({}, 'OK')
	},
	getUserInfo: () => {
		if (userMap['admin']) {
			return formatMessage(userMap['admin'], 'OK')
		} else {
			return false
		}
	},
	getToken: () => {
		let data = userinfo
		let message = {
			data,
			"sessionKey": "dfsadfsddddddddd",
			"pk": "MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAI/TSpYIevTh7EC00CZ2zBpsbZzOi40dhogfRFeh4FevYKGB+NEbyfMradGWK86ofhbxRZo1FFmvaiPECdoCyhM826CYyDAokL+l+55ZIVmfJd6VJW+WBjYQ7QGEv8vi5bW1x634YkRYue087Y4q7P+/4YIgS9f1HLzLGKqxchSxAgMBAAECgYBMItj4BXM5kSNkuZL62aaAUmfQO5KqWDfwdUTTcxD0uhVYShpyb9h/TrsMxQdZtd5RvNVQpcqpE3AHkO56J0HbFAfKMlCpsu6pHp/8JX2YvJVNdSksK5dKv7F7GntsGTVU17HsNm9gfaANUwshWO7OTKhiRRk+xXngbFS3dauoQQJBAMP8SnXqbZCQ2vdN+AKfoxZz/+cSpR/DKmS+5/J/s4N2z3sbkx2sK47Cd1BepkJu+25jtoQtzsUeJ3psRpv2OekCQQC73g7n5OzP4rOYVXrKdlzIH95ShlYapeg1i8kJe+IPAZYXyx6bjM3vrUAUJpBVZ8KTRxDWDbMgzb4J0bGCTv+JAkAiW3suOr+kZVCNpDSDOTsc9474ElOyQsOOz8zXvT1aIZzz5vyeag1kxICoLT+WS+B2FLLtbx5dfhDLrGmgc8TpAkAerxYgKfPDwHM03kE/8DUXOp1FPUuy7oYOuNYNBn7VlJy/Jh3JqiW4j8N3hxTr3haZl3HYhERNh00SrX0gm2aBAkBxlWv3k5ZI4/qrUw3Qzbuu8Plk39bpekIcBmk4avbBHs4qXjhuUmlawGA7TLINNws3xIJnPNoACpZE8jf20bz+",
			"t": 1579498613250
		}

		return formatMessage(message, 'OK')
	},
	logout: () => {
		return formatMessage({}, 'OK')
	}
}
