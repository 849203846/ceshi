// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'  //默认引用时 如果是index.js 可以神略

Vue.config.productionTip = false
// runtime+compiler 支持编译template 将template编译成render函数
// runtime不支持template
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//router配置路由映射表
  // template: '<App/>',
  // components: { App }
  render:h=> h(App) //将app组件渲染到#app元素内


  }
);


// mac版本安装nvm window安装nvm-window
// nvm use 8.2.1 node版本管里
