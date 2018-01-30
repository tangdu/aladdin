import * as types from '../constants/types'
// import axios from 'axios'

const state = {
  isFetching: false,
  data: {},
  userInfo: {
    loginname: '',
    score: 0
  }
}
const getters = {}
const actions = {
  /**
     *
     * @param {accesstoken} [String]
     * @param {isRefresh} [Boolean]
     */
  fetchUserAction ({ commit, state, dispatch }, params) {
    commit(types.FETCH_USER_SUC, {
      data: { loginname: '唐杜', score: 100 }
    })
  }
}

const mutations = {
  [types.FETCH_USER_SUC] (state, action) {
    state.userInfo = action.data
    state.isFetching = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
