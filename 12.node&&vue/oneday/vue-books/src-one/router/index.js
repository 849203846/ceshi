import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../containers/Home.vue';
import List from '../containers/List.vue';
import Add from '../containers/Add.vue';
import updata from '../containers/updata.vue'
Vue.use(VueRouter);
const routes=[
  {path:'/home',component:home},
  {path:'/list',component:List},
  {path:'/add',component:Add},
  {path:'/update/:id',component:updata,name:"update"},//this.$route.params.id
  {path:'/',redirect:'/home'}
  ];
export default new VueRouter({
  routes
});
