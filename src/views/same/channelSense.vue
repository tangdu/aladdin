<template>
  <div style="background-color:#F0F0F0;">
    <Row style="padding:10px 0px;">
        <SenseItem 
            :senseData="channel.data.senseList" 
            @loadSense="loadSenseData" 
            @dianzan="dianzanEvent" 
            @sendmsg="sendmsgEvent">
        </SenseItem>
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
    ...mapState(['channel', 'user'])
  },
  mounted () {
  },
  methods: {
    ...mapActions(['fetchChannelSenseAction', 'dianzanUserSenseAction']),
    loadSenseData () {
      this.fetchChannelSenseAction({userId: 15814301, channelId: this.$route.query.channelId, url: this.$route.query.url})
    },
    dianzanEvent (senseId,channelId) {
      this.dianzanUserSenseAction({userId: 15814301, senseId: senseId,channelId:channelId})
    },
    sendmsgEvent () {

    }
  }
}
</script>

<style>
.tools i{
    margin: -5px 20px 0px 5px;
}
</style>

