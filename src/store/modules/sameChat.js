import * as types from '../constants/types'
import axios from 'axios'

const state = {
  isFetching: false,
  data: {
    chartList: [],
    userInfo: null,
    toUserInfo: null,
    unReadMessageList: []
  },
  chatForm: {
    fuid: '',
    sender_name: '',
    msg: '',
    type: '',
    tuid: ''
  },
  dataOffset: 0,
  nextmid: 0,
  unReadMessageListCot: 0,
  error: ''
}
const getters = {

}
const actions = {
  fetchUserChatAction ({ commit, state, dispatch }, params) {
    if (state.senses_offset < 0) {
      return false
    }
    axios({
      url: '/api/same/chart_history',
      method: 'get',
      params: {
        userId: 15111234,
        limit: 50,
        toUserId: params.toUserId
      }
    }).then(resp => {
      var result = resp.data.data
      commit(types.FETCH_CHANNELLIST_SUC, result)
    }).catch((data, status, request) => {
    })
  },
  fetchUnReadMessageAction ({ commit, state, dispatch }, params) {
    axios({
      url: '/api/same/query_message',
      method: 'get',
      params: {
        userId: 15111234
      }
    }).then(resp => {
      var result = resp.data.data
      commit(types.FETCH_UNREAD_MESSAGE_SUC, result)
    }).catch((data, status, request) => {
    })
  },
  fetchUserInfoAction ({ commit, state, dispatch }, params) {
    axios({
      url: '/api/supersame/query_user_info',
      method: 'get',
      params: {
        userId: params.userId
      }
    }).then(resp => {
      var result = resp.data.data
      commit(types.FETCH_USER_INFO_SUC, result)
    }).catch((data, status, request) => {
    })
  },
  fetchUserInfo2Action ({ commit, state, dispatch }, params) {
    axios({
      url: '/api/supersame/query_user_info',
      method: 'get',
      params: {
        userId: params.userId
      }
    }).then(resp => {
      var result = resp.data.data
      commit(types.FETCH_USER_INFO2_SUC, result)
    }).catch((data, status, request) => {
    })
  },
  putUserChatAction ({ commit, state, dispatch }, params) {
    axios({
      url: '/api/same/send_msg',
      method: 'post',
      params: {
        userId: 15111234,
        limit: 50,
        toUserId: params.toUserId
      }
    }).then(resp => {
      var result = resp.data
      commit(types.FETCH_CHANNELLIST_SUC, result)
    }).catch((data, status, request) => {
    })
  }
}

const mutations = {
  [types.FETCH_CHANNELLIST_SUC] (state, action) {
    state.data.chartList = (action)
    state.isFetching = false
  },
  [types.FETCH_USER_INFO_SUC] (state, action) {
    state.data.userInfo = action
    state.isFetching = false
  },
  [types.FETCH_USER_INFO2_SUC] (state, action) {
    state.data.toUserInfo = action
    state.isFetching = false
  },
  [types.FETCH_UNREAD_MESSAGE_SUC] (state, action) {
    state.data.unReadMessageList = action.results
    state.data.unReadMessageListCot = action.count
    state.nextmid = action.nextmid
    state.isFetching = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
