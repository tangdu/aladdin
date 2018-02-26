import * as types from '../constants/types'
import axios from 'axios'

const state = {
  isFetching: false,
  data: {
    senseList: [],
    channels: [],
    queryChannels: []
  },
  sensesOffset: 0,
  channelId: '',
  error: ''
}
const getters = {

}
const actions = {
  fetchChannelSenseAction ({ commit, state, dispatch }, params) {
    if (state.senses_offset < 0) {
      return false
    }
    axios({
      url: '/api/same/query_senses',
      method: 'get',
      params: {
        channelId: params.channelId,
        offset: state.sensesOffset,
        userId: params.userId,
        url: params.url
      }
    }).then(resp => {
      var result = resp.data.data

      commit(types.FETCH_CHANNELSAMELIST_SUC, result)
    }).catch((data, status, request) => {
    })
  },
  fetchChannelAction ({ commit, state, dispatch }, params) {
    axios({
      url: '/api/same/all_channels',
      method: 'get'
    }).then(resp => {
      var result = resp.data
      commit(types.FETCH_CHANNELLIST_SUC, result)
    }).catch((data, status, request) => {
    })
  },
  fetchQueryChannelAction ({ commit, state, dispatch }, params) {
    axios({
      url: '/api/same/find_channels',
      method: 'get',
      params: {
        txt: params
      }
    }).then(resp => {
      var result = resp.data
      commit(types.FETCH_QUERY_CHANNELLIST_SUC, result)
    }).catch((data, status, request) => {
    })
  },
  fetchHotChannelAction ({ commit, state, dispatch }, params) {
    axios({
      url: '/api/supersame/query_hot_channel_info',
      method: 'get'
    }).then(resp => {
      var result = resp.data
      commit(types.FETCH_HOT_CHANNELLIST_SUC, result)
    }).catch((data, status, request) => {
    })
  },
  downloadChannelAction ({ commit, state, dispatch }, params) {
    axios({
      url: '/api/same/save_channel',
      method: 'get',
      params: {
        channelId: params
      }
    }).then(resp => {
      // var result = resp.data
      // commit(types.FETCH_HOT_CHANNELLIST_SUC, result)
    }).catch((data, status, request) => {
    })
  }
}

const mutations = {
  [types.FETCH_CHANNELSAMELIST_SUC] (state, action) {
    state.data.senseList = state.data.senseList.concat(action.results)
    state.sensesOffset = action.offset
    state.isFetching = false
  },
  [types.FETCH_CHANNELLIST_SUC] (state, action) {
    state.data.channels = action.data
    state.isFetching = false
  },
  [types.FETCH_QUERY_CHANNELLIST_SUC] (state, action) {
    state.data.queryChannels = action.data
    state.isFetching = false
  },
  [types.FETCH_HOT_CHANNELLIST_SUC] (state, action) {
    state.data.queryChannels = action.data
    state.isFetching = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
