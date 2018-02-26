<template>
  <div style="width:1000px;height:100px;" >
    <Row>
      <Col span="24">
        <waterfall :line-gap="340">
          <waterfall-slot
            v-for="(item, index) in same.data.senseList"
            :width="item.width"
            :height="item.height"
            v-if="item.photo!=''"
            :order="index"
            :key="item.id">
            <img :src="item.photo" width="100%" height="100%" class="image"/>

            <div class="item-text">
              @{{item.user.username}}.{{item.txt}}
            </div>
          </waterfall-slot>
        </waterfall>
        </Col>
    </Row>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Waterfall from "vue-waterfall/lib/waterfall"
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot"

export default {
  data: function () {
    return {
        currentItemId: 0
    }
  },
  components: {
     Waterfall,
     WaterfallSlot
  },
  computed: {
    ...mapState([
      'same'
    ])
  },
  created:function(){
      this.fetchSenseAction()
  },
  methods: {
    ...mapActions([
      'fetchSenseAction'
    ])
  }
}
</script>

<style>
.item-text {
    top: -60px;
    position: relative;
    color: #ffffff;
    font-size: 12px;
    height: 60px;
    background-color: #000000;
    opacity: 0.6;
    overflow: hidden;
}
</style>