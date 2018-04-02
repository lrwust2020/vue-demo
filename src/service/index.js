/**
 * 基于axios封装的HTTP网络请求
 * Author: lr
 * Date: 2018/4/2
 * @Last Modified by: lr
 * @Last Modified at: 2018/4/2
 */

import axios from 'axios'
import config from '@/../config'
import * as _ from '@/util/tools'

axios.defaults.timeout = 30000
axios.defaults.baseURL = '/'

// HTTP请求拦截器
axios.interceptors.request.use(
  request => {
    let auth = _.getAuth()
    if (auth) {
      config.headers.token = `${auth}`
    }
    return config
  },
  error => {
    _.showMsg('网络错误，请重试', 'error')
    return Promise.reject(error)
  }
)

// HTTP响应拦截器
axios.interceptors.response.use(
  response => {
    let receiveData = response.data
    if (receiveData.code === 0 || receiveData.code === '0') {
      return response
    } else {
      let msg = receiveData.msg ? receiveData.msg : `服务器返回了 ${receiveData.code} CODE`
      _.showMsg(msg, 'error')
      _.tokenExpired(receiveData)
      return response
    }
  },
  error => {
    _.showMsg('网络错误，请重试', 'error')
    return Promise.reject(error)
  }
)

export default axios
