import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import same from './modules/same'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    user,
    same
  }
})

export default store
