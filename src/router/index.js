import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '../views/user'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
