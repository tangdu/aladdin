import Vue from 'vue'
import Router from 'vue-router'
import Report from '../views/report'
import Words from '../views/words'
import App from '../App'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/app',
      components: {
        default: App
      }
    },
    {
      path: '/report',
      components: {
        page: Report
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
