/**
 * 工具库
 */

import Cookie from 'vue-cookie'
import {Message, MessageBox} from 'element-ui'
import MSDataTransfer from './dataTranslate.js'

/**
 * 设置Cookie
 * @param key
 * @param value
 * @param seconds
 */
export const setCookie = (key, value = '', seconds = -1) => {
  Cookie.set(key, value, {
    expires: `${seconds}s`
  })
}

/**
 * 获取Cookie
 * @param key
 * @returns {*}
 */
export const getCookie = key => {
  return Cookie.get(key)
}

/**
 * 删除Cookie
 * @param key
 * @returns {*}
 */
export const delCookie = key => {
  console.log('deleteCookie:', key)
  return Cookie.delete(key)
}

/**
 * 获取登录授权
 * @returns {*}
 */
export const getAuth = () => {
  return getCookie('admin-access-token')
}

/**
 * 判断登录授权是否过期
 * @param res
 */
export const tokenExpired = res => {
  if (res.code === 401) {
    delCookie('admin-access-token')
    setTimeout(function () {
      window.location.replace('/')
    }, 700)
  }
}

/**
 * 判断用户是否登录
 */
export const isLogin = () => {
  const loginStatus = !!Cookie.get('dmin-access-token')
  if (loginStatus) {
    return true
  }
  return false
}

/**
 * 显示信息弹框
 * @param msg
 * @param type
 */
export const showMsg = (msg, type = 'info') => {
  switch (type) {
    case 'info':
      Message.info({
        showClose: true, message: msg
      })
      break
    case 'error':
      Message.error({
        showClose: true, message: msg
      })
      break
    case 'success':
      Message.success({
        showClose: true, message: msg
      })
      break
    case 'warn':
      Message.warning({
        showClose: true, message: msg
      })
      break
    default:
      Message.info({
        showClose: true, message: msg
      })
      break
  }
}

/**
 * 显示确认弹框
 * @param text
 * @param title
 * @param confirmButtonText
 * @param cancelButtonText
 * @param type
 * @returns {Promise<MessageBoxData>}
 */
export const showConfirm = (text = '', {
  title = '提示',
  confirmButtonText = '确定',
  cancelButtonText = '取消',
  type = 'warning'
}) => {
  return MessageBox.confirm(text, title, {
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    type: type
  })
}

/**
 * 邮件地址正则匹配
 * @param value
 */
export const isEmail = value => /^[_.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.){1,4}[a-z]{2,5}$/.test(value.trim())

/**
 * 手机号码正则匹配
 * @param value
 */
export const isPhone = value => /^1[0-9]{10}$/.text(value.trim())

/**
 * 检测对象是否是空对象(不包含任何可读属性)。
 * 方法只既检测对象本身的属性，不检测从原型继承的属性。
 * @param obj
 * @returns {boolean}
 */
export const isEmpty = obj => {
  for (let name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false
    }
  }
  return true
}

/**
 * 把扁平化的数据转为成结构化的数据
 * @param data
 * @param config
 * @returns {{data: Array}}
 */
export const translateToJsonTree = (data, config) => {
  let id = config.id || 'id'
  let pid = config.pid || 'pid'
  let children = config.children || 'children'

  let idMap = []
  let jsonTree = []

  data.forEach(v => {
    idMap[v[id]] = v
  })

  data.forEach(v => {
    let parent = idMap[v[pid]]
    if (parent) {
      !parent[children] && (parent[children] = [])
      parent[children].push(v)
    } else {
      jsonTree.push(v)
    }
  })
  return {
    data: jsonTree
  }
}

/**
 * Object对象是无序的，将其转换成数组并进行排序
 * @param obj
 * @param orderBy
 * @returns {{cate: Array, list: Array}}
 */
export const sortObject = (obj, orderBy = 'asc') => {
  var sortable = []
  var cate = []
  var list = []
  for (var item in obj) {
    sortable.push([item, obj[item]])
  }
  if (orderBy === 'desc') {
    sortable.sort(function (a, b) {
      return b[1] - a[1]
    })
  } else if (orderBy === 'asc') {
    sortable.sort(function (a, b) {
      return a[1] - b[1]
    })
  }
  sortable.forEach(function (a) {
    cate.push(a[0])
    list.push(a[1])
  })
  return {
    cate: cate,
    list: list
  }
}

/**
 * 获取URL上的信息
 * 调用方法 : var fType = getUrlVars()["type"];
 * @returns {{}}
 */
export const getUrlVars = () => {
  let vars = {}
  window.location.href.replace(/[?&]+([^=&]+)=([^&#]*)/gi, function (
    m,
    key,
    value
  ) {
    vars[key] = value
  })
  return vars
}

export default {
  MSDataTransfer
}
