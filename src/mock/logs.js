import Mock from 'mockjs'
import { param2Obj,formatMessage, formatPaging } from '@/mock/mockutils'

const List = []
const count = 233

const Random = Mock.Random
for (let i = 1; i <= count; i++) {
  List.push(Mock.mock({
    id: '@increment',
	name: Random.cname(),
    context: i + '@ctitle(25,40)',
    event: '1002',
    createDate: '@datetime',
	status:'1'
  }))
}

export default {
  logslist: config => {
    const { page = 2, size = 20 } = param2Obj(config.url)
    const pageList = List.filter((item, index) => index < size * page && index >= size * (page - 1))
    const data = formatPaging(pageList, page, 33, count)
    return formatMessage(data, 'OK')
  }
}
