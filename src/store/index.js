import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import same from './modules/same'
import channel from './modules/channel'
import sameChat from './modules/sameChat'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    user,
    same,
    channel,
    sameChat
  }
})

export default store
