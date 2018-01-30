<template>
  <div>
    <div 
      :watch="same.data.senseList"
      :key="item.id"
      v-for="item in same.data.senseList">
      <img :src="item.photo" width="100%" height="100%" class="image">
      <div>@{{item.user.username}}.{{item.txt}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
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
    ]),
    loadSense () {
      this.fetchSenseAction()
    }
  }
}
</script>

