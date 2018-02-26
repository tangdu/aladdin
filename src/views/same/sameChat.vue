<template>
  <div style="background-color:#F0F0F0;height:100%;">
    <div style="height:40px;line-height:40px;background-color:#fde3cf;">
      <span>聊天记录</span>
      <span style="margin:0 auto;text-align:center;" v-if="sameChat.data.toUserInfo">{{sameChat.data.toUserInfo.username}}</span>
      <span style="float:right;padding-right:10px;">
        <Icon type="ios-loop-strong" @click="loadChat"></Icon></span>
    </div>

    <div style="padding:4px 5px;height:663px;">
      <div v-for="item in sameChat.data.chartList">
          <div v-if="item.fuid!='15111234'" style="float:left;clear:both;">
              <div style="float:left;clear:both;">
                <Avatar :src="sameChat.data.toUserInfo.avatar" size="small"/>
                {{item.sender_name}}
              </div>
              <div v-if="item.media.txt!=''" style="float:left;clear:both;">{{item.media.txt}}</div>
              <div v-if="item.media.sticker" style="float:right;clear:both;">
                  <img :src="item.media.sticker.photo" height="60px" width="60px" style="margin-left:20px"/>
              </div>
          </div>
          <div v-if="item.fuid=='15111234'" style="float:right;clear:both;">
              <div style="float:right;clear:both;">
                  {{item.sender_name}}
                  <Avatar :src="sameChat.data.userInfo.avatar" size="small"/>
              </div>
              <div v-if="item.media.txt!=''" style="float:right;clear:both;">{{item.media.txt}}</div>
              <div v-if="item.media.sticker" style="float:right;clear:both;">
                  <img :src="item.media.sticker.photo" height="60px" width="60px" style="margin-right:20px"/>
              </div>
          </div>
      </div>
    </div>

    <div style="position:fiexd;bottom:0">
      <Form :model="sameChat.chatForm" :label-width="0" >
          <FormItem>
            <Col span="21">
              <Input v-model="sameChat.chatForm.msg" placeholder="Enter something..."></Input>
            </Col>
            <Col span="3">
              <Button @click="sendMsg">发送</Button>
            </Col>
          </FormItem>
      </Form>  
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
    this.fetchUserChatAction({toUserId:this.$route.query.toUserId})
    this.fetchUserInfoAction({userId:'15111234'})
    this.fetchUserInfo2Action({userId:this.$route.query.toUserId})
  },
  methods: {
    ...mapActions(['fetchUserChatAction','putUserChatAction','fetchUserInfoAction','fetchUserInfo2Action']),
    loadChat(){
      this.fetchUserChatAction({toUserId:this.$route.query.toUserId})
    },
    sendMsg(){
        alert(this.$store.state.sameChat.chatForm.msg);
    }
  }
}
</script>

<style>
html,body,.app{
  height:100%;
}
</style>
