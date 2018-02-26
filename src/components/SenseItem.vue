<template>
  <div ref="wrapper" v-infinite-scroll="loadSense" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <ul class="content" >
         <li v-for="item in senseData"  style="margin:15px 0px;background-color:white;">
             <Row style="padding-bottom:7px;padding-top:3px;">
                <Col span="18">
                    <img :src="item.channel.icon" height="30px" width="30px" style="float:left;"/>
                    
                    <div style="float:left;padding-left:10px;">
                        <div style="font-size:13px;color:#53b0ff;">
                          {{item.channel.name}}
                        </div>
                        <div style="font-size:xx-small;color:gray;">
                          {{$moment(item.created_at*1000).format("LL")}}
                        </div>
                    </div>
                    
                </Col>
                <Col span="6" style="padding-top:8px;" >
                    <span v-on:click="toUserSense(item.user.id)" style="float:right;">
                      <Avatar :src="item.user.avatar" size="small" />
                      {{item.user.username}}
                    </span>
                </Col>
            </Row>
             <a :href="item.photo" :download="item.photo" v-if="item.photo!='' && item.media_id<=0">
              <img  v-lazy="item.photo" 
                style="width: auto;height: auto;max-width: 100%;max-height: 100%;"/>
             </a>

             <video v-if="item.media_id>0 && item.media.video"  :src='item.media.video.src' controls="controls"
               style="width: auto;height: auto;max-width: 100%;max-height: 100%;"></video>
             
             <span v-if="item.media_id>0 && item.media.movie" >
               <div style="font-size:14px;padding:10px; 0px 0px 10px;"  >
                 {{item.media.movie.title}}<br>
                 {{item.media.movie.actor}} 
               </div>
              <video  
                :poster='item.media.movie.cover'
                :src='item.media.movie.trailer' controls="controls"
               style="width: auto;height: auto;max-width: 100%;max-height: 100%;"></video>
             </span>

             <!-- <video v-if="item.media_id>0 && item.media.sound"  :src='item.media.sound.src' controls="controls"
               style="width: 100%;height:50px;max-width: 100%;"></video> -->
            <aplayer
              v-if="item.media_id>0 && item.media.sound" 
                autoplay=null
                theme="#42b983"
                preload="none"
                mode="circulation"
                :music="{
                    title: item.txt,
                    author: item.user.username,
                    url: item.media.sound.src,
                    lrc:'',
                    pic: 'https://p3.music.126.net/HJYMPi7BLKFfSvA2T3OUmg==/3316127069531628.jpg?param=90y90'
                }"/>

              <aplayer
              v-if="item.media_id>0 && item.media.music" 
                autoplay=null
                theme="#42b983"
                preload="metadata"
                mode="circulation"
                :music="{
                    title: item.media.music.title,
                    author: item.media.music.author,
                    url: item.media.music.src,
                    pic: item.media.music.album_art_url
                }"/>

             <div style="backgroup-color:gray;font-size:14px;padding:10px; 0px 0px 10px;" v-html="$options.filters.capitalize(item.txt)" >
               
             </div>
             <Row style="padding-left:10px;">
                <Col span="18">
                    <Icon type="happy" size="30px" color="red"></Icon>&nbsp;&nbsp;{{item.likes}}赞/{{item.views}}查看
                </Col>
                <Col span="6" class="tools">
                    <span v-on:click="dianzan(item.id,item.channel.id)">
                      <Icon type="android-favorite-outline" size="23"></Icon>
                    </span>
                    <span v-on:click="sendmsg(item.id)">
                      <Icon type="ios-chatboxes-outline" size="23"></Icon>
                    </span>
                </Col>
             </Row>
         </li>
      </ul>

  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'

export default {
  components: {
    Aplayer
  },
  props: [
    'senseData'
  ],
  methods: {
    loadSense () {
      this.$emit('loadSense')
    },
    dianzan (senseId,channelId) {
      this.$emit('dianzan', senseId,channelId)
    },
    sendmsg (id) {
      this.$emit('sendmsg', id)
    },
    toUserSense (userId) {
      this.$router.push({path: '/usersame', query: {userId: userId}})
    }
  }
}
</script>

