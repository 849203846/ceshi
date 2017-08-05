import Vue from 'vue'
import Router from 'vue-router' //引入路由
import Hello from '@/components/Hello' // @指的是src目录 绝对路径
import Home from '../components/Home.vue'
Vue.use(Router); //vue-router 是vue的一个插件 使用一下vuerouter
// import  router from 'Router'

export default new Router({
  routes: [
    {
      path: '/',//路径
      name: 'Hello', //对应的组件
      component: Hello
    },
    {path:'/home',component:Home}
  ]
})
