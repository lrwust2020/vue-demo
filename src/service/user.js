/**
 * 用户模块HTTP服务
 * Author: lr
 * Date: 2018/4/2
 * @Last Modified by: lr
 * @Last Modified at: 2018/4/2
 */

import http from './index'

export const postLogin = (username, password) => http.post('/api/login', {
  username: username,
  password: password
})

export const oaLogin = code => http.get('/api/oalogin', {
  params: {
    code
  }
})

export const getLogout = () => http.get('/api/logout', {
  params: {}
})

/**
 * 修改密码
 * @param oldPassword
 * @param newPassword
 */
export const modifyPwd = (
  oldPassword,
  newPassword
) => http.post('/api/sys/user/modifyPwd', {
  oldPassword: oldPassword,
  newPassword: newPassword
})

/**
 * 重置密码
 * @param userId
 * @param username
 * @param password
 */
export const resetPwd = ({
  userId,
  username,
  password
}) => http.post('/api/sys/user/resetPwd', {
  userId: userId,
  username: username,
  password: password
})

/**
 * 创建新用户
 * @param username
 * @param password
 * @param name
 * @param deptId
 * @param email
 * @param phone
 * @param status
 * @param roleIds
 */
export const createUser = ({
  username,
  password,
  name,
  deptId,
  email,
  phone,
  status = 1,
  roleIds = []
}) => http.post('/api/sys/user/save', {
  username: username,
  password: password,
  name: name,
  deptId: deptId,
  email: email,
  phone: phone,
  status: status,
  roleIds: roleIds
})

/**
 * 更新用户
 * @param username
 * @param password
 * @param name
 * @param deptId
 * @param email
 * @param phone
 * @param status
 * @param roleIds
 */
export const updateUser = ({
  username,
  password,
  name,
  deptId,
  email,
  phone,
  status = 1,
  roleIds = []
}) => http.post('/api/sys/user/save', {
  username: username,
  password: password,
  name: name,
  deptId: deptId,
  email: email,
  phone: phone,
  status: status,
  roleIds: roleIds
})

/**
 * 删除用户（支持批量）
 * @param uids
 */
export const deleteUser = (uids = []) => http.get('/api/sys/user/delete', {
  params: {
    uids: uids.toString()
  }
})

/**
 * 获取用户列表
 * @param offset
 * @param limit
 * @param deptId
 */
export const getUserList = ({
  offset,
  limit,
  deptId
}) => http.get('/api/sys/user/list', {
  params: {
    offset: offset,
    limit: limit,
    deptId: deptId
  }
})

/**
 * 判断用户是否存在
 * @param username
 */
export const isExist = username => http.post('/api/sys/user/exist', {
  username: username
})
