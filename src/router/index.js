import Vue from 'vue'
import Router from 'vue-router'
import User from '../views/user'
import Words from '../views/words'
import Default from '../Default'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/app',
      components: {
        default: Default
      },
      children: [
        {path: 'user', component: User}
      ]
    },
    {
      path: '/user',
      components: {
        page: User
      }
    },
    {
      path: '/words',
      components: {
        page: Words
      }
    }
  ]
})
