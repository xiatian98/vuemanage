import axios from 'axios'
import cookie from '../util/cookie'
// const qs = require('qs');
// import {  Message } from 'element-ui'


// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 300000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent


    // console.log(cookie.getCookie("token"))

    if (cookie.getCookie("token")) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers.Authorization = "bearer " + cookie.getCookie("token")
    }
    // if(config.method==='post')
    // {
    // config.data = qs.stringify(config.data)
    // }

    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(

  response => {
    if (response.code == 401) {
      this.$notify.error({
        title: '错误',
        message: '登录过期'
      });
      this.cookie.clearCookie("token");
      this.cookie.clearCookie("userName");
      this.$router.push({ path: '/Login' })
    }

    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    return res
  },
)


export default service