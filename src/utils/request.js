// 这份文件就是用来做拦截的（二次封装axios）
import axios from 'axios'
import qs from 'qs'

import { Message } from 'element-ui'

// 引入进度条（页面顶部会出现进度条），npm install --save nprogress下载
import nprogress from 'nprogress' // 更多用法自己看官网API
// 引入进度条样式
import 'nprogress/nprogress.css'

// 创建一个请求实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 10000,
  withCredentials: true, // 设置跨域,是否提供凭据信息(cookie、HTTP认证及客户端SSL证明等),且服务端要设置Access-Control-Allow-Origin，告诉浏览器允许跨域，而且这个值必须指定域名，不能设置为*
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // 设置请求头
  transformRequest: (data) => qs.stringify(data), // 修改post请求头,为application/x-www-form-urlencoded格式
  validateStatus: status => /^(2|3)\d{2}$/.test(status) // 自定义响应成功的HTTP状态码，只有以2或3开头的状态码为成功。很少配置
})

// 拦截器--请求拦截
instance.interceptors.request.use(config => {
  // 进度条开始
  nprogress.start()

  return config
}, err => {
  return Promise.reject(err)
})

// 拦截器--响应拦截
instance.interceptors.response.use((response) => {
  // 进度条结束
  nprogress.done()

  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */
  const res = response.data
  if (res.code !== 200) {
    Message({ // Message是element-ui的信息提示
      message: res.message,
      type: 'error',
      duration: 5 * 1000
    })

    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    return res.data
  }
}, err => {
  // return Promise.reject(err)

  // 进度条结束
  nprogress.done()

  const { response } = err // 拿到服务器返回的HTTP状态码
  Message({ // Message是element-ui的信息提示
    message: response.data.message + response.data.statusCode,
    type: 'error',
    duration: 5 * 1000
  })
  if (response) {
    // 服务器最起码返回了结果
    switch (response.status) {
      case 401: // 一般是权限（未登录等）
        break
      case 403: // 服务器拒绝执行（token过期）
        break
      case 404: // 找不到页面
        break
      default:
        break
    }
  } else {
    // 服务器连结果都没返回。有两种情况：1、客户端没有网，2、服务器奔溃
    if (!window.navigator.onLine) {
      // 断网处理：可以跳转到断网页面
      return
    }
    return Promise.reject(err)
  }
})

// 导出
export default instance
