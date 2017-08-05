<template>
    <div class="updata">
<header><i @click="back"></i>修改</header>
      <ul class="form-list">
        <li>
          <label for="bookname">书名</label>
          <input type="text" placeholder="请输入书名" id="bookname" v-model="book.bookName">
        </li> <li>
        <label for="bookCover">书的封面地址</label>
        <input type="text" placeholder="请输入书的封面地址" id="bookCover" v-model="book.bookCover"></li> <li>
        <label for="bookInfo">书的详细信息</label>
        <input type="text" placeholder="请输入书的详细信息" id="bookInfo" v-model="book.bookInfo">
      </li>
        <li>
          <button @click="update">
           修改图书图书
          </button>
        </li>
      </ul>
    </div>
</template>
<script>
    //默认导出一个对象
import axios from 'axios'
    export default {
        data() {
            return {msg: 'hello',book:{
              bookName:'',
              bookCover:'',
              bookInfo:''
            }}
        },
        methods: {
          back(){
            this.$router.go(-1) //后退
          },
          getbook(){
            axios.get('/api/book?id='+this.$route.params.id).then(res=>{
              this.book=res.data
            })
          },
          update(){
            axios.put('/api/book?id='+this.book.id,this.book).then(res=>{
              this.back()
            })
          }
        },
        components: {},
        computed: {},
      created(){
        //当页面加载时获取路径中的id
this.getbook()
      },
      activated(){
      this.getbook()
      }
    }
</script>
<style scoped lang="less">
    /*scoped只在当前有用*/
    .form-list{

      padding: 10px 30px;
      li{
        height: 65px;
        display: flex;
        flex-direction: column;
        input{
          margin-top: 5px;
          box-shadow: none;
          border: 1px dashed deeppink;
          height:30px;
        }
        button{
          height: 40px;
        }

      }
    }
  .updata{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 999;
    header{
     height: 45px;
      background: #f1f1f1;
      align-items: center;
      display: flex;
    text-align: center ;
    position: relative;
      justify-content: center;
    i{
      display: block;
      border: 2px solid #ccc;
      width: 10px;
      height: 10px;
      -webkit-transform-origin:center;
      transform: rotate(45deg) ;
      border-top: 0;
      border-right:0 ;
      position: absolute;
      left: 20px;
    }
    }
  }

</style>
