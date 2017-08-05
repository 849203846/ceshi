<template>
    <div>
      <h1><b><i>百  度  一  下 <br>你  就  知  道</i></b></h1>
      <input
        type="text"
        class="form-control"
        v-model="input"
        placeholder="请输入你要搜索的内容"
         @keyup="getData">
      <ul class="list-group">
        <li class="list-group-item" :class="{active:index==i}" v-for="(item,i) in s" >{{item}} </li>


      </ul>
    </div>
</template>
<script>
    //默认导出一个对象
//    axios+jsonp  /fetch/jquery
    import jsonp from "jsonp"
    export default {
        data() {
            return {msg: 'hello',s:[],input:'',index:-1}
        },
      created(){
        jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+this.input,{param:'cb'}, (err,data) =>{
          this.s=data.s
        })
      },
        methods: {
        getData(e){
          if(e.keyCode===38){
            this.index-=1;
            this.input=this.s[this.index];
            return
          }
          if(e.keyCode===40){
            this.index+=1;
            this.input=this.s[this.index];
            return
          }
          if(e.keyCode==13){
            return window.open('https://www.baidu.com/s?wd='+this.input)

        }
          jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+this.input,{param:'cb'}, (err,data) =>{
            this.s=data.s
          })
        }
        },
        components: {},
        computed: {}
    }
</script>
<style scoped>
    /*scoped只在当前有用*/
  h1{
    text-align: center;
    color: lightseagreen;
  }
</style>
