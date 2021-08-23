import service from '@/utils/request'

export function logslist(data) {
  return service({
    url: '/api/logs/list.do',
    method: 'post',
    data: data
  })
}

export function getlogs(data) {
  return service({
    url: '/api/logs/get.do',
    method: 'post',
    data: data
  })
}

