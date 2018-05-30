// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'
import api from '@/http/api.js'       //http请求
import less from 'less'
import Mint from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
Vue.use(less)

Vue.config.productionTip = false
Vue.prototype.$http = axios;

// 引入mockjs
require('./mock.js')


// 用钩子函数beforeEach()对路由进行判断



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
