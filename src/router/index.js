import Vue from 'vue'
import Router from 'vue-router'
import User from '../views/user'

Vue.use(Router)
export default new Router({
  routes: [
    {
      name: 'topics',
      path: '/user',
      meta: {
        title: 'Login - 登录'
      },
      component: User
    }
  ]
})
