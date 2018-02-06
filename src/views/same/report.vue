<template>
  <div>
      <img src="static/img/bak.png" width="100%" height="100%" /> 
      

      <div class="userinfo">
          <img :src="user.data.userAvatar" class='user_img'/>
          <div class="wen font1">@{{user.data.userName}}</div>
      </div>

      
      <div class="muststat" >
          <div class="wen font2">最关心你的人</div>
          <div v-for="item in user.data.mustStarUsers" class="img"  style="margin:20px; 0px;">
            <div>{{item.username}}</div>
            <Badge :count="item.usernum" class-name='demo-badge-alone' overflow-count="10000">
              <img :src="item.avatar" class='must_img'/>
            </Badge>
          </div>
        <div style="clear:both;"></div>
      </div> 

      <div class="wen font2">你的标签云</div>
      <img :src="user.data.mayun" width="100%" height="100%" />


      <div class="font1 wen" style="margin:20px 0px;">
        About.Me,{{this.$moment(user.data.registerDate).fromNow()}}加入same,来看看时光给你留下了什么吧.
      </div>
      
      <Timeline>
        <TimelineItem color="green">
            <Icon type="trophy" slot="dot"></Icon>
            <span>{{this.$moment(user.data.firstPublishSense.created_at*1000).format("YYYY-MM-DD HH")}} 第一篇动态 For [{{user.data.firstPublishSense.channel.name}}]</span>
            <div class="wen font2" > 
              {{user.data.firstPublishSense.txt}}
            </div>
            <div :style="{height: '414px',width: '380px','background-size': '100% 100%','background-image':`url(${user.data.firstPublishSense.photo})`}"></div>
        </TimelineItem>
        <TimelineItem>
          <span>{{this.$moment(user.data.maxPublishSense.created_at*1000).fromNow()}} 最新的动态 For [{{user.data.maxPublishSense.channel.name}}]</span>
          <div  class="wen font2" >
            {{user.data.maxPublishSense.txt}}
          </div>
           <div :style="{height: '414px',width: '380px','background-size': '100% 100%','background-image':`url(${user.data.maxPublishSense.photo})`}"></div>
        </TimelineItem>

        <TimelineItem color="red">
          最火的动态 For [{{user.data.moreStarSense.channel.name}}]
          火力值:<Tag color="red">{{user.data.moreStarSense.likes*2+user.data.moreStarSense.views}}</Tag>
          赞:<Tag color="yellow">{{user.data.moreStarSense.likes}}</Tag>
          <div  class="wen font2" >
            {{user.data.moreStarSense.txt}}
          </div>
          <div :style="{height: '414px',width: '380px','background-size': '100% 100%','background-image':`url(${user.data.moreStarSense.photo})`}"></div>
        </TimelineItem>
    </Timeline>

      <div  class="wen font2" >
          <div id="channelPie" style="height:414px;width:414px;" ></div>
      </div>

      <div  class="wen font2" >
          2018，你的关键词是<span style="font-size:40px;">"{{user.data.keyword}}"</span>
      </div>
      <img src="static/img/ki.png" width="100%" height="100%" /> 

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import echarts from "echarts";

export default {
  // data() {
  //   return {
  //     maxPublishSenseStyle: {
  //       height: "414px",
  //       width: "380px",
  //       "background-size": "100% 100%",
  //       "border-radius": "10px",
  //       // 'box-shadow':'0 0 1px 1px rgba(255,255,255,.7) inset',
  //       "background-image":
  //         "url(" + this.$store.state.user.data.maxPublishSense.photo + ")"
  //     },
  //     moreStarSenseStyle: {
  //       height: "414px",
  //       width: "380px",
  //       "border-radius": "10px",
  //       "background-size": "100% 100%",
  //       "background-image":
  //         "url(" + this.$store.state.user.data.moreStarSense.photo + ")"
  //     },
  //     firstPublishSenseStyle: {
  //       height: "414px",
  //       width: "380px",
  //       "border-radius": "10px",
  //       "background-size": "100% 100%",
  //       "background-image":
  //         "url(" + this.$store.state.user.data.firstPublishSense.photo + ")"
  //     }
  //   };
  // },
  computed: {
    ...mapState(["user"])
  },
  mounted() {
    this.fetchUserAction();
  },
  watch:{
    'user.data':{
      handler(curVal,oldVal){
        this.channelPie();
　　　 },
　　　　deep:true
    }
  },
  methods: {
    ...mapMutations(["FETCH_USER_SUC"]),
    ...mapActions(["fetchUserAction"]),
    loadUser() {
      this.fetchUserAction();
    },
    channelPie() {
      this.charts = echarts.init(document.getElementById("channelPie"));
      this.charts.setOption({
        title: {
          text: "最活跃的频道:" + this.$store.state.user.data.activeChannel.name,
          subtext:'关注['+this.$store.state.user.data.attentionChannelNum+']频道,已发表['+
                         this.$store.state.user.data.publishSenseNum+']',
          x:'center'
        },
        tooltip: {},
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.$store.state.user.data.sameAnalyseChannelChart.channels
        },
        series: [
          {
            name: "动态",
            radius : '55%',
            center: ['50%', '60%'],
            type: "pie",
            roseType : 'radius',
            label: {
                normal: {
                    show: true,
                    formatter: '{c}: {d}%'
                },
                emphasis: {
                    show: true
                }
            },
            data: this.$store.state.user.data.sameAnalyseChannelChart.channelNums
          }
        ]
      });
    }
  }
};
</script>

<style>
.wen {
  font-size: 20px;
}
.must_img {
  border-radius: 10px;
  width: 90px;
  height: 90px;
  clear: both;
}
.muststat div.img {
  margin: 0px 29px;
  float: left;
}
.demo-badge-alone {
  background: #5fb2cc !important;
}
.user_img {
  border-radius: 100px;
  width: 200px;
  height: 200px;
  margin: 60px 105px 20px 105px;
}
.userinfo div {
  margin: 10px 140px;
}
</style>

