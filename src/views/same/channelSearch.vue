<template>
  <div>

    <Form ref="chanelQueryForm" :model="chanelQueryForm" :rules="rules" inline>
        <FormItem prop="txt">
            <Input type="text" v-model="chanelQueryForm.txt" placeholder="">
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('chanelQueryForm')">查询</Button>
        </FormItem>
    </Form>
    
    <div class="channel-item" style="background-color:#F0F0F0;" v-for="(item, index) in channel.data.queryChannels" :key="index">
          <Row>
              <Col span="3">
                <img :src="item.icon" height="40px" width="40px" style="float:left;margin-top:5px;"/>
              </Col>
              <Col span="17">
                 <div>
                    <div>{{ item.name }}</div>
                    <div style="font-size:xx-small;color:gray;">已经产生{{item.times}}</div>
                 </div>
              </Col>
              <Col span="4" style="padding-top:10px;">
                    <Button type="info" @click="downChannel(item.id)">下载</Button>
              </Col>
          </Row>
      </div>
  </div>
</template>

<script>``
import { mapState, mapActions,mapGetters } from 'vuex'

export default {
  data(){
    return {
      chanelQueryForm: {
        txt: ''
      },
      rules: {
        txt: [{ required: true, message: '不能为空', trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapState(['channel'])
  },
  mounted () {
    this.fetchHotChannelAction()
  },
  methods: {
    ...mapActions(['fetchQueryChannelAction','fetchHotChannelAction','downloadChannelAction']),
    handleSubmit(name){
       this.$refs[name].validate((valid) => {
            if (valid) {
                this.fetchQueryChannelAction(this.chanelQueryForm.txt)
            } else {
                this.$Message.error('Fail!');
            }
        })
    },
    downChannel(id){
        this.downloadChannelAction(id)
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

