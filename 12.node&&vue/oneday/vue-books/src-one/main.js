import Vue from 'vue' //导入vue
import App from './App.vue'
import router from './router' //路由
import './common/index.less' //公共样式


//轮播图插件
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper);
// import VueLazyload from 'vue-lazyload'

// 会给我们vue添加一个全局的v-lazy指令
// or with options


// 如果是本地图片需要import
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   loading: 'https://cdn.dribbble.com/users/210200/screenshots/842531/stubbytruckgif.gif',
//   attempt: 1
// });

new Vue({
  el:'#app',
  router,
render:h=>h(App)
});
