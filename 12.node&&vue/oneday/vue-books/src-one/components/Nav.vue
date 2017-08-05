<template>
    <nav>
      <router-link to="/home">
        <i class="lconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>

      <router-link to="/list">
      <i class="iconfont icon-list"></i>
      <span>列表</span>
    </router-link>
      <router-link to="/add">
        <i class="icon icon-54"></i>
        <span>添加</span>
      </router-link>
    </nav>
</template>
<script>
    //默认导出一个对象
    export default {
        data() {
            return {msg: 'hello'}
        },
        methods: {},
        components: {},
        computed: {}
    }
</script>
<style scoped lang="less">
    /*scoped只在当前有用*/
    nav{
      position: fixed;
      left: 0;
      width: 100%;
      height: 60px;
      bottom: 0;
      display: flex; //flex布局
      border-top: 1px solid #5e5e5e;
      a{
        flex: 1; //1等份
        display: flex;
        flex-direction: column;//上下布局
        align-items: center; //水平居中
        justify-content: center;//垂直居中
      }
      .router-link-active{
        background: linear-gradient(to left top,hotpink,blueviolet);
        color: white;
      }
    }
</style>

