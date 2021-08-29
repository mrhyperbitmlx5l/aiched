import Mock from 'mockjs'
import {
	param2Obj,
	formatMessage,
	formatPaging
} from '@/mock/mockutils'

const Random = Mock.Random
const List = []
const count = 55

const log = Mock.mock({
	id: '@increment',
	title: '@ctitle(25,40)',
	context: '@ctitle(25,80)',
	name: Random.cname(),
	event: '1002',
	createDate: '@datetime',
	status: '1'
})


for (let i = 1; i <= count; i++) {
	List.push(Mock.mock({
		id: '@increment',
		title: '@ctitle(25,40)',//name: Random.cname(),
		context: i + '@ctitle(25,40)',
		name: Random.cname(),
		event: '1002',
		createDate: '@datetime',
		status: '1'
	}))
}

export default {
	logslist: config => {
		const {
			page = 2, size = 20
		} = param2Obj(config.url)
		const pageList = List.filter((item, index) => index < size * page && index >= size * (page - 1))
		const data = formatPaging(pageList, page, 33, count)
		return formatMessage(data, 'OK')
	},
	getlogs: () => {
		return formatMessage(log, 'OK')
	}
}
