import * as types from '../constants/types'
// import axios from 'axios'

const state = {
  isFetching: false,
  data: {
    senseList: [],
    channel: []
  },
  channelId: '1288952',
  sensesOffset: 0,
  userId: 15752075,
  error: ''
}
const getters = {}
const actions = {
  fetchSenseAction ({ commit, state, dispatch }, params) {
    this.$ajax.get('/api/same/query_senses', {
      params: {
        channelId: this.channelId,
        offset: this.senses_offset,
        userId: this.userId,
        url: this.url
      }
    }).then(resp => {
      var result = resp.data.data
      commit(types.FETCH_SAMELIST_SUC, result)
    }).catch((data, status, request) => {
    })
  }
}

const mutations = {
  [types.FETCH_SAMELIST_SUC] (state, action) {
    state.data.senseList = action.results
    state.sensesOffset = action.offset
    state.isFetching = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
