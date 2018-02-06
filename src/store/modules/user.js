import * as types from '../constants/types'
import axios from 'axios'

const state = {
  isFetching: false,
  'data': {
    'mayun': 'http://192.168.1.110:8000/static/15936403_word.jpg',
    'keyword': '\u776b\u6bdb',
    'activeChannel': {
      'cate': 2,
      'count': 6,
      'icon': 'http://qiniu1.same.com/default.png',
      'id': 1615660,
      'mode': 0,
      'name': 'Antonia',
      'times': 6,
      'user_id': 15936403
    },
    'attentionChannelNum': 72,
    'channelVOS': [{
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/351/a09a0dc37d5bdbee2ec731581c1ecd52.png',
      'id': 899,
      'mode': 1,
      'name': '文艺怪诞',
      'times': 306013,
      'user_id': 2
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/icon/55adea5ddc7fc.png',
      'id': 1057301,
      'mode': 1,
      'name': '短发控🙏',
      'times': 26562,
      'user_id': 1190940
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/661/6b8ac82fdf3022ed148d85fb7c29b22f.png',
      'id': 967,
      'mode': 1,
      'name': '要命的自拍控',
      'times': 585968,
      'user_id': 2
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'https://qiniu1.same.com/icon/55ae36cf3b674.png',
      'id': 1003399,
      'mode': 1,
      'name': '我爱VSCOcam',
      'times': 61158,
      'user_id': 4544201
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/default.png',
      'id': 1194847,
      'mode': 1,
      'name': '高颜值单身狗🐶',
      'times': 15446,
      'user_id': 3931887
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://s.same.com/default.png',
      'id': 1015326,
      'mode': 1,
      'name': '我这么美我不能死',
      'times': 23475,
      'user_id': 1139603
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/icon/55ae2648928db.png',
      'id': 1551685,
      'mode': 1,
      'name': '桃花酒馆',
      'times': 2347,
      'user_id': 3911203
    }, {
      'cate': 2,
      'count': 2,
      'icon': 'http://s.same.com/984/57987a1920229_w512_h513.png',
      'id': 1002393,
      'mode': 1,
      'name': '每日搭配',
      'times': 79485,
      'user_id': 1005435
    }, {
      'cate': 2,
      'count': 5,
      'icon': 'http://qiniu1.same.com/icon/55ae37edb075e.png',
      'id': 1166214,
      'mode': 1,
      'name': 'DALUK',
      'times': 33604,
      'user_id': 2776043
    }, {
      'cate': 2,
      'count': 4,
      'icon': 'http://qiniu1.same.com/129/56caab0caa0dd_w513_h512.png',
      'id': 1067271,
      'mode': 1,
      'name': 'EDC ☞日常随身装备论',
      'times': 10819,
      'user_id': 1366596
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/748/557c0e83ec324_w600_h600.png',
      'id': 1015767,
      'mode': 1,
      'name': 'VSCOcam',
      'times': 8616,
      'user_id': 1143224
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/default.png',
      'id': 1498060,
      'mode': 1,
      'name': '光的捕捉实验',
      'times': 5341,
      'user_id': 1104400
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://s.same.com/icon/55acdbc1e782d.png',
      'id': 1491085,
      'mode': 1,
      'name': 'Masker-',
      'times': 5092,
      'user_id': 15473065
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://s.same.com/994/a8b68c5e957cfbf63a1f5fba7c0a44f8.png',
      'id': 1026578,
      'mode': 1,
      'name': '关于自己的20件事',
      'times': 75226,
      'user_id': 15076515
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/523/dc34c2fbda91b512fc2e92b6e15ebb0a.png',
      'id': 1001617,
      'mode': 1,
      'name': 'Instagrammer',
      'times': 92244,
      'user_id': 1003690
    }, {
      'cate': 2,
      'count': 2,
      'icon': 'http://s.same.com/icon/55ace90cbbdc0.png',
      'id': 1239284,
      'mode': 1,
      'name': '颜值爆表集中营',
      'times': 2297,
      'user_id': 1343081
    }, {
      'cate': 2,
      'count': 5,
      'icon': 'http://qiniu1.same.com/default.png',
      'id': 1403954,
      'mode': 1,
      'name': 'E.M.L.P',
      'times': 868,
      'user_id': 8651923
    }, {
      'cate': 13,
      'count': 1,
      'icon': 'http://qiniu1.same.com/714/56541ef208d0a_w512_h512.png',
      'id': 1288952,
      'mode': 1,
      'name': '小电影工厂',
      'times': 14284,
      'user_id': 73
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/20170725191532.png',
      'id': 48,
      'mode': 1,
      'name': '吃吃喝喝',
      'times': 371847,
      'user_id': 73
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/637/57987a058888e_w513_h513.png',
      'id': 1054689,
      'mode': 1,
      'name': '口红达人',
      'times': 7266,
      'user_id': 1125698
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/980/5465e15c4e60a_w512_h512.png',
      'id': 1014716,
      'mode': 1,
      'name': '瞧我明亮的大眼睛',
      'times': 11864,
      'user_id': 1108955
    }, {
      'cate': 2,
      'count': 2,
      'icon': 'http://qiniu1.same.com/icon/55acc4df87b05.png',
      'id': 1019963,
      'mode': 1,
      'name': '无彩妆会死星人',
      'times': 17374,
      'user_id': 1010136
    }, {
      'cate': 2,
      'count': 6,
      'icon': 'http://qiniu1.same.com/default.png',
      'id': 1615660,
      'mode': 0,
      'name': 'Antonia',
      'times': 6,
      'user_id': 15936403
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/icon/55ade8d11c651.png',
      'id': 1010938,
      'mode': 1,
      'name': '胶片味道',
      'times': 9790,
      'user_id': 1100964
    }, {
      'cate': 2,
      'count': 3,
      'icon': 'http://s.same.com/705/189b95a27d1b272a74a4c7ea6b391280.png',
      'id': 56,
      'mode': 1,
      'name': '旅行的意义',
      'times': 115152,
      'user_id': 2
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/184/5857b858e9bf3_w512_h512.jpg',
      'id': 1015351,
      'mode': 1,
      'name': '在线等，挺急的',
      'times': 22344,
      'user_id': 4784
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/default.png',
      'id': 1274027,
      'mode': 1,
      'name': 'same摄影大赛',
      'times': 36715,
      'user_id': 73
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://s.same.com/511/1dfb258603adedeea84ae6183ce518be.png',
      'id': 825,
      'mode': 1,
      'name': '喵星人根据地',
      'times': 130998,
      'user_id': 1167
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/138/579879ce7b055_w513_h513.png',
      'id': 1068778,
      'mode': 1,
      'name': '表情包get√',
      'times': 50183,
      'user_id': 1211862
    }, {
      'cate': 2,
      'count': 1,
      'icon': 'http://qiniu1.same.com/default.png',
      'id': 1006834,
      'mode': 1,
      'name': '手机壳收集癖',
      'times': 5556,
      'user_id': 1110020
    }],
    'firstPublishSense': {
      'cate': 2,
      'channel': {
        'cate': 2,
        'config': {},
        'icon': 'http://s.same.com/511/1dfb258603adedeea84ae6183ce518be.png',
        'id': 825,
        'mode': 1,
        'name': '喵星人根据地',
        'times': 130998,
        'user_id': 1167
      },
      'channel_id': 825,
      'created_at': 1497921702,
      'height': 800,
      'id': 67814598,
      'is_active': true,
      'is_folded': false,
      'is_liked': 0,
      'likes': 82,
      'media_id': 0,
      'photo': 'http://s.same.com/sense/FC585F51-2F10-4B2A-884B-DB0C83596FB1__c0_-0_800_800__w800_h800.jpg',
      'recent_replies': [{
        'content': '回复 ⁣铃铛小姐⁣: 非常嫌弃 还有一张他儿子变兔子的',
        'created_at': 1497922039,
        'id': 2636294,
        'target_id': 67814598,
        'target_parent_id': 825,
        'target_parent_user_id': 1167,
        'target_type': 'sense',
        'target_user_id': 15936403,
        'user_id': '15936403'
      }, {
        'content': '充满鄙视的眼神🤔',
        'created_at': 1497921881,
        'id': 2636270,
        'target_id': 67814598,
        'target_parent_id': 825,
        'target_parent_user_id': 1167,
        'target_type': 'sense',
        'target_user_id': 15936403,
        'user_id': '15082442'
      }],
      'replies': 2,
      'txt': '披着猫皮的兔子 你已经暴露了',
      'user_id': 15936403,
      'views': 778,
      'width': 800
    },
    'maxPublishSense': {
      'cate': 2,
      'channel': {
        'cate': 2,
        'config': {},
        'icon': 'http://qiniu1.same.com/icon/55ae37edb075e.png',
        'id': 1166214,
        'mode': 1,
        'name': 'DALUK',
        'times': 33683,
        'user_id': 2776043
      },
      'channel_id': 1166214,
      'created_at': 1517651136,
      'height': 1920,
      'id': 76915688,
      'is_active': true,
      'is_folded': false,
      'likes': 21,
      'media_id': 0,
      'photo': 'http://qiniu1.same.com/sense/0D705B45-9AF3-4FD4-BD10-F64F8DF90A80__c0_0_1080_1920__w1080_h1920.jpg',
      'txt': '',
      'user_id': 15936403,
      'views': 257,
      'width': 1080
    },
    'moreStarSense': {
      'cate': 2,
      'channel': {
        'cate': 2,
        'config': {},
        'icon': 'http://qiniu1.same.com/351/a09a0dc37d5bdbee2ec731581c1ecd52.png',
        'id': 899,
        'mode': 1,
        'name': '文艺怪诞',
        'times': 306013,
        'user_id': 2
      },
      'channel_id': 899,
      'created_at': 1515297405,
      'height': 1080,
      'id': 75936505,
      'is_active': true,
      'is_folded': false,
      'likes': 168,
      'media_id': 0,
      'photo': 'http://qiniu1.same.com/sense/912310FA-433D-44F8-B4E2-5ACFEFB55612__c0_0_1080_1080__w1080_h1080.jpg',
      'txt': '深蓝\n一种让人有一点怕又有一点喜欢还有一点想念的颜色',
      'user_id': 15936403,
      'views': 3505,
      'width': 1080
    },
    'mustStarUsers': [{
      'avatar': 'http://s.same.com/avatar/1479533995_470216.jpg',
      'userId': 15253601,
      'username': '2',
      'usernum': 42
    }, {
      'avatar': 'https://s.same.com/avatar/1498476363_514102.jpg',
      'userId': 15796061,
      'username': 'Recovery澔',
      'usernum': 39
    }, {
      'avatar': 'https://s.same.com/avatar/1506484577_755536.jpg',
      'userId': 15747291,
      'username': 'XzYY.',
      'usernum': 31
    }],
    'publishSenseNum': 51,
    'registerDate': 1497919524000,
    'rowdate': 1517730986591,
    'sameAnalyseChannelChart': {
      'channelNums': [{
        'name': 'Antonia',
        'value': 6
      }, {
        'name': 'E.M.L.P',
        'value': 5
      }, {
        'name': 'DALUK',
        'value': 5
      }, {
        'name': 'EDC ☞日常随身装备论',
        'value': 4
      }, {
        'name': '旅行的意义',
        'value': 3
      }, {
        'name': '无彩妆会死星人',
        'value': 2
      }],
      'channels': ['Antonia', 'E.M.L.P', 'DALUK', 'EDC ☞日常随身装备论', '旅行的意义', '无彩妆会死星人']
    },
    'userAvatar': 'https://qiniu1.same.com/avatar/1515382550_207626.jpg',
    'userId': 15936403,
    'userName': 'Antonia'
  }
}
const getters = {}
const actions = {

  fetchUserAction ({ commit, state, dispatch }, params) {
    axios({
      method: 'get',
      url: '/api/supersame/same_user_analyse',
      params: {
        userId: 4515194
      }
    }).then((res) => {
      commit(types.FETCH_USER_SUC, {
        data: res.data.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }
}

const mutations = {
  [types.FETCH_USER_SUC] (state, action) {
    state.data = action.data
    state.isFetching = false
    console.log(action.data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
