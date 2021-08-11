import service from '@/utils/request'

export function logslist(data) {
  return service({
    url: '/api/logs/list.do',
    method: 'post',
    data: data
  })
}

