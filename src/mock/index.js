import Mock from 'mockjs'
import sessionAPI from './session'
import logsAPI from './logs'

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}
// 设置全局延时
Mock.setup({
  timeout: '300-600'
})

// 登录相关
Mock.mock(/\/api\/token.do/, 'post', sessionAPI.getToken)
Mock.mock(/\/api\/masses\/unique\/get.do/, 'post', sessionAPI.uniqueVerify)
Mock.mock(/\/api\/register.do/, 'post', sessionAPI.register)
Mock.mock(/\/api\/login.do/, 'post', sessionAPI.login)

Mock.mock(/\/api\/logs\/list.do/, 'post', logsAPI.logslist)


export default Mock