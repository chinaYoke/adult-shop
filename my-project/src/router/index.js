import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Collage = resolve => require(['@/views/Collage.vue'], resolve)
const Classify = resolve => require(['@/views/Classify.vue'], resolve)
const Login = resolve => require(['@/views/Login.vue'], resolve)

export default new Router({
    routes: [{
        path: '/',
        name: '首页',
        component: Index
      },
      {
        path: '/collage',
        name: '分类',
        component: Collage
      },
      {
        path: '/classify',
        name: '正在拼',
        component: Classify
      },
      {
        path: '/login',
        name: '个人中心',
        component: Classify
      }
    ]
})