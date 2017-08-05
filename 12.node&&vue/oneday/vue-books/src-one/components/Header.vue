<template>
    <div class="header" >
      {{title}}
    </div>
</template>
<script>
    //默认导出一个对象
    export default {
        data() {
            return {msg: 'hello'}
        },
      props:{
          title:{}
      },
        methods: {},
        components: {},
        computed: {}
    }
</script>
<style scoped>
    /*scoped只在当前有用*/
  .header{
    background: #c1c1c1;
    text-align: center;
    height: 45px;
    line-height: 45px;
    position: fixed;
    width: 100%;
    z-index: 200;
  }
</style>
