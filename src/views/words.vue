<template>
  <div style="padding:2px;">
      <div class="font2" style="font-size:25px;">
        <p>
        @也许
        </p>
        你在Same的这些时光.
      </div>
    
      <div class="userinfo">
          <img :src="user.data.userAvatar" class='user_img'/>
          <div class="wen font2">@{{user.data.userName}}</div>
      </div>
      
      

      <div  class="wen font2" >
          2018，你的关键词是:
      </div>

      <div  class="wen font1" >
          <span style="font-size:70px;">"{{user.data.keyword}}"</span>
      </div>

      <div class="muststat" >
          <div class="font2" style="font-size:20px;">最关心你的人</div>
          <div v-for="item in user.data.mustStarUsers" class="img"  style="margin:20px; 0px;">
            <div>{{item.username}}</div>
            <Badge :count="item.usernum" class-name='demo-badge-alone' overflow-count="10000">
              <img :src="item.avatar" class='must_img'/>
            </Badge>
          </div>
        <div style="clear:both;"></div>
      </div> 

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
  text-align: center;
  font-size: 20px;
}
.must_img {
  border-radius: 10px;
  width: 90px;
  height: 90px;
  clear: both;
}
.muststat{
  margin-top:50px;
}
.muststat div.img {
  margin: 0px 29px;
  float: left;
}
.demo-badge-alone {
  background: #5fb2cc !important;
}
.userinfo img {
  border-radius: 100px;
  width: 200px;
  height: 200px;
}
.userinfo  {
  margin-top:30px;
  text-align: center;
}
</style>

