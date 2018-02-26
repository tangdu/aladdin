<template>
  <div style="background-color:white;height:100%;">
    <div style="height:40px;line-height:40px;background-color:#fde3cf;">
      <span>未读消息列表({{sameChat.data.unReadMessageListCot}})</span>
    </div>

    <div style="height:100%;">
      <div @click="toSameChat(item.user.id)" v-for="item in sameChat.data.unReadMessageList" style="margin:5px 0px;background-color:#F0F0F0;min-height:50px;">
          <Row style="padding:2px 0px;" >
              <Col span="6">
                <Avatar :src="item.user.avatar" size="small"/>
                {{item.user.username}}
              </Col>
              <Col span="18" v-if="item.msg.media.txt!=''" style="overflow:hidden">
                {{item.msg.sender_name}}:{{item.msg.media.txt}}</Col>
              <Col span="18" v-if="item.msg.media.sticker" style="overflow:hidden">
                {{item.msg.sender_name}}:<img :src="item.msg.media.sticker.photo" height="60px" width="60px"/>
              </Col>
          </Row>
      </div>
    </div>

   
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['sameChat'])
  },
  mounted () {
    this.fetchUnReadMessageAction({userId:'15111234'})
  },
  methods: {
    ...mapActions(['fetchUnReadMessageAction']),
    toSameChat(userId){
        this.$router.push({path: '/sameChat', query: {'toUserId':userId}})
    }
  }
}
</script>

<style>
html,body,.app{
  height:100%;
}
</style>
