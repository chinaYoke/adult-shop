import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Index = resolve => require(['@/views/Index.vue'], resolve)


export default new Router({
    routes: [{
        path: '/',
        name: '首页',
        component: Index
      },
      {
          path:'/',
          name:''
      }
    ]
})