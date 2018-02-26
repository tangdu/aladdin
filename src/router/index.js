import Vue from 'vue'
import Router from 'vue-router'
import Report from '../views/same/report'
import NewReport from '../views/same/nreport'

import Words from '../views/same/words'
import Same from '../views/same/index'
import UserSame from '../views/same/user'
import Channel from '../views/same/channel'
import ChannelSense from '../views/same/channelSense'
import ChannelSearch from '../views/same/channelSearch'
import SameChat from '../views/same/sameChat'
import UnReadMessage from '../views/same/unReadMessage'
import App from '../App'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/app',
      components: {
        default: App
      }
    },
    {
      path: '/same',
      component: Same
    },
    {
      path: '/usersame',
      component: UserSame
    },
    {
      path: '/report',
      components: {
        page: Report
      }
    },
    {
      path: '/nreport',
      components: {
        page: NewReport
      }
    },
    {
      path: '/words',
      components: {
        page: Words
      }
    },
    {
      path: '/channel',
      components: {
        page: Channel
      }
    },
    {
      path: '/channelSense',
      components: {
        page: ChannelSense
      }
    },
    {
      path: '/channelSearch',
      components: {
        page: ChannelSearch
      }
    }, {
      path: '/sameChat',
      components: {
        page: SameChat
      }
    }, {
      path: '/unReadMessage',
      components: {
        page: UnReadMessage
      }
    }
  ]
})
