<template>
  <div style="background-color:#F0F0F0;" class="channel">
      <div class="channel-item" v-for="(item, index) in channel.data.channels" :key="index">
          <Row>
              <Col span="3">
                <img :src="item.icon" height="40px" width="40px" style="float:left;margin-top:5px;"/>
              </Col>
              <Col span="10">
                 <div>
                    <div>{{ item.name }}</div>
                    <div style="font-size:xx-small;color:gray;">已经产生{{item.times}}</div>
                 </div>
              </Col>
              <Col span="11">
                <div v-if="item.config.tabs" class="contents">
                    <a v-for="content in item.config.tabs[0].content" 
                        @click="toChannelSense(item.id,content.url)">{{content.title}}</a>
                </div>
                <div v-if="!item.config.tabs" class="contents">
                    <a @click="toChannelSense(item.id,'{default_url}')">最新</a>
                </div>
              </Col>
          </Row>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['channel'])
  },
  mounted () {
    this.fetchChannelAction()
  },
  methods: {
    ...mapActions(['fetchChannelAction']),
    toChannelSense (id, url) {
      this.$router.push({path: '/channelSense', query: {'url': url, channelId: id}})
    }
  }
}
</script>

<style>
.channel-item {
    width: 100%;
    padding:4px 0px 4px 4px;
    margin: 10px 0px;
    height: 60px;
    background-color:white;
}
.contents {
  margin-top: 20px;
}
.contents a{
  margin: 0px 3px;
}
</style>

