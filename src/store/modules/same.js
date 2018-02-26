import * as types from '../constants/types'
import axios from 'axios'

const state = {
  isFetching: false,
  data: {
    senseList: [],
    channel: []
  },
  channelId: '1056740',
  sensesOffset: 0,
  userId: 15752075,
  error: ''
}
const getters = {}
const actions = {
  fetchSenseAction ({ commit, state, dispatch }, params) {
    if (state.senses_offset < 0) {
      return false
    }
    axios({
      url: '/api/same/query_senses',
      method: 'get',
      params: {
        channelId: state.channelId,
        offset: state.senses_offset,
        userId: state.userId,
        url: '/activity/senses/channel/{channel_id}?order=hostest&from=-7%20day'
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
