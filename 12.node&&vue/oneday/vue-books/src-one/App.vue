<template>
    <div class="page">
      <transition name="slider">
  <keep-alive><!-- //缓存作用避免重复发送数据 transition template///-->
      <router-view style="position: absolute;top: 0;left: 0;width: 100%;"></router-view>
  </keep-alive>
      </transition>
      <mnav></mnav>
    </div>
</template>
<script>
    //默认导出一个对象
   import mnav from './components/Nav.vue'

    export default {
        data() {
            return {msg: 'hello'}
        },
        methods: {},
        components: {mnav},
        computed: {}
    }
</script>
<style scoped>
    /*scoped只在当前有用*/
    /*进入前的位置*/
.slider-enter{
  transform: translateX(100%);
}
    /*激活时候的动画*/
  .slider-enter-active{
   transition: all .3s;
  }
    /*离开目的地的动画和方法*/
  .slider-leave-active{
    transition: all .3s;
    transform: translateX(-100%);
  }
</style>
