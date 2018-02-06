<template>
  <div class="app">
      <BarMenuVue></BarMenuVue>
      <div class="container">
        <Row>
          <Col span="4">
            <SubMenuVue ></SubMenuVue>
          </Col>
          <Col span="20">
            <router-view/>
          </Col>
       </Row>
      </div>
  </div>
</template>

<script>
import BarMenuVue from '../components/BarMenu.vue'
import SubMenuVue from '../components/SubMenu.vue'

export default {
  components: {
    BarMenuVue,
    SubMenuVue
  }
}
</script>

<style lang="css">
.app{
      background: #eee;
      padding-top: 1px;
}
.container {
     margin: 80px auto 15px;
     background: #fff;
     box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
}
</style>
