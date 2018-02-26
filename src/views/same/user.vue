<template>
  <div style="background-color:#F0F0F0;">
    <Row style="background-color:white;">
        <Col span="10">
          <img :src="user.data.userAvatar" class='user_img'/>
        </Col>
        <Col span="14">
          <div >{{user.data.userName}}</div>
          {{$moment(user.data.registerDate).format("LL")}} Join Same
          <div>内容数{{user.data.publishSenseNum}} 频道数{{user.data.attentionChannelNum}}</div>
        </Col>

        <SenseItem :senseData="user.senseData"  @loadSense="loadSenseData" @dianzan="dianzanEvent" @sendmsg="sendmsgEvent"></SenseItem>
    </Row>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SenseItem from '@/components/SenseItem.vue'

export default {
  components: {
    SenseItem
  },
  computed: {
    ...mapState(['user'])
  },
  mounted () {
    this.fetchUserInfoAction({userId: this.$route.query.userId})
  },
  methods: {
    ...mapActions(['fetchUserSenseAction', 'fetchUserInfoAction', 'dianzanUserSenseAction']),
    loadSenseData () {
      this.fetchUserSenseAction({userId: this.$route.query.userId})
    },
    dianzanEvent (senseId,channelId) {
      this.dianzanUserSenseAction({userId: 15111234, senseId: senseId,channelId:channelId})
    },
    sendmsgEvent () {

    }
  }
}
</script>

<style>
.user_img {
  border-radius: 50px;
  width: 80px;
  height: 80px;
}
.tools i{
    margin: -5px 20px 0px 5px;
}
</style>

