// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import moment from 'moment'

const AppView = `
<template>
  <div class="app">
      <router-view/>
      <router-view name="page"/>
  </div>
</template>
`

Vue.use(iView)
moment.locale('zh-cn')
Vue.prototype.$moment = moment

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { AppView },
  template: '<App/>'
})
