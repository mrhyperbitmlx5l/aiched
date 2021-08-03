import axios from 'axios'
import store from '@/store'
import MESSAGECODE from '@/api/messageCode'

// create an axios instance
console.log(process.env)
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 15000 ,// request timeout
  headers: {'Content-Type': 'application/json'},
  responseType: 'json', // 默认的
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    //console.log(response)
    if(MESSAGECODE.SESSIONLESS === response.data.code){
      store.commit('session/setToken','',{root: true})	
    }
    if(response.headers['content-type']==='application/x-download;charset=GBK'){
      return {
        data:response.data,
        isFile:true
      }
    }
    return response
  },
  error => {
    store.commit('app/setMessage',{type:'error',context:error} ,{ root: true })
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
