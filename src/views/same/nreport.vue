<template>
  <div>
      <div class="font2" style="height:736px;font-size:15px;background-image:url('static/img/IMG_3697.PNG')">
        <p style="padding-top:200px;margin-left:20px;font-size:30px;color:white;">
            你在{{$moment(user.data.registerDate).format("LL")}}
        </p>
        <p style="margin-top:10px;margin-left:200px;font-size:30px;color:white;">
            登录same星球
        </p>
        <p style="margin-top:10px;margin-left:50px;font-size:30px;color:white;">
            same陪你走过了
        </p>
        <p style="margin-top:10px;margin-left:210px;font-size:30px;color:white;">
            <span style="font-size:45px;color:yellow;">{{$moment().diff($moment(user.data.registerDate), 'days')}}</span>天
        </p>
      </div>
    
      <div class="userinfo">
          <img :src="user.data.userAvatar" class='user_img'/>
          <div class="wen font2">@{{user.data.userName}}</div>
      </div>

      <div  class="wen font2" >
          2018，你的关键词是:
      </div>

      <div  class="wen font1" >
          <span style="font-size:50px;">"{{user.data.keyword}}"</span>
      </div>

      <div class="muststat" >
          <div class="font2" style="font-size:17px;">最关心你的人</div>
          <div v-for="item in user.data.mustStarUsers" class="img" >
            <div style="width:60px;display: block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{item.username}}</div>
            <Badge :count="item.usernum" class-name='demo-badge-alone' overflow-count="10000">
              <img :src="item.avatar" class='must_img'/>
            </Badge>
          </div>
        <div style="clear:both;"></div>
      </div> 

      <div class="muststat" >
          <div class="font2" style="font-size:17px;">最活跃的频道</div>
          <div id="channelPie" style="height:200px;width:414px;" ></div>
          <div style="clear:both;"></div>
      </div> 

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import echarts from "echarts";

export default {
  computed: {
    ...mapState(["user"])
  },
  mounted() {
    this.fetchUserAction({userId:this.$route.query.userId});
    //this.channelPie();
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
          subtext:'关注['+this.$store.state.user.data.attentionChannelNum+']频道,已发表['+
                         this.$store.state.user.data.publishSenseNum+']',
          x:'left'
        },
        yAxis: {
            type: 'value'
        },
        legend: {
            data:this.$store.state.user.data.sameAnalyseChannelChart.channels,
            align: 'left'
        },
        xAxis: {
          type: 'category',
          left: 'left',
          axisLabel:{  
            interval:0,//横轴信息全部显示  
            rotate:15
          },
          data: this.$store.state.user.data.sameAnalyseChannelChart.channels
        },
        series: [
          {
            type: "line",
            lineStyle:{
                normal:{
                    width:2,  //连线粗细
                    color: "#BDB76B"  //连线颜色
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
  font-size: 15px;
}

.muststat{
  margin-top:10px;
}
.muststat .img {
  margin: 10px 35px;
  float: left;
}
.muststat  img {
  border-radius: 10px;
  width: 60px;
  height: 60px;
  clear: both;
}

.demo-badge-alone {
  background: #5fb2cc !important;
}
.userinfo img {
  border-radius: 80px;
  width: 130px;
  height: 130px;
}
.userinfo  {
  margin-top:10px;
  text-align: center;
}
</style>

