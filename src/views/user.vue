<template>
  <div id="app">
      这是用户页面
      {{user.userInfo.loginname}}
      <Button type="primary" @click="loadUser($event)">加载用户信息</Button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'user'
    ])
  },
  methods: {
    ...mapMutations([
      'FETCH_USER_SUC'
    ]),
    ...mapActions([
      'fetchUserAction'
    ]),
    loadUser () {
      this.fetchUserAction()
      //this.FETCH_USER_SUC({data: { loginname: '唐杜222', score: 100 }})
    }
  }
}
</script>

