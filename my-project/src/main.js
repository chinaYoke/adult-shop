// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from '@/vuex/store'
import api from '@/http/api.js'       //http请求
import less from 'less'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
Vue.use(less)

// import "./mock.js";
// import Mock from '@/http/mock.js'
Vue.config.productionTip = false
Vue.prototype.$api = api;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
