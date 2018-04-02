/*
 * @Description: 登录模块路由
 * @Author: lr
 * @Date: 2018-04-02
 * @Last Modified by: lr
 * @Last Modified at: 2018-04-02
 */
const Login = resolve => {
  import('@/pages/login/Index').then(module => {
    resolve(module)
  })
}

const childRoutes = [
  {
    // hold on
  }
]

export const routes = {
  path: 'login',
  component: Login,
  meta: {
    auth: false,
    title: '后台管理平台 - 登录'
  }
}
