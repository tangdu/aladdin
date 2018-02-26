// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import moment from 'moment'
import infiniteScroll from 'vue-infinite-scroll'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  error: './static/img/error.png',
  loading: './static/img/loading.png'
})

Vue.component('App', {
  template: `
        <div class="app">
            <router-view/>
            <router-view name="page"/>
        </div>
    `
})
Vue.use(infiniteScroll)
Vue.use(iView)
moment.locale('zh-cn')
Vue.prototype.$moment = moment
Vue.config.productionTip = false

/* 注册过滤器 */
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.replace(/\n/g, '<br>')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>'
})
