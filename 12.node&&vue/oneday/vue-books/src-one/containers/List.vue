<template>
    <div class="page">
      <mheader title="列表页"></mheader>
      <div class="scroll-content">
        <ul class="list">
          <li v-for="book in books">
            <img v-lazy="book.bookCover" alt="" width="120px">
            <div>
              <h3>{{book.bookName}}</h3>
              <p>{{book.bookInfo}}</p>
              <div class="btn-list">
                <button @click="remove(book.id)">删除</button>
                <!--如果通过对象传递给params 通过name传递路径 需要给路劲起名字-->
                <router-link tag="button" :to="{name:'update',params:{id:book.id}}">
                  修改
                </router-link>

              </div>

            </div>
          </li>
        </ul>
      </div>

    </div>
</template>
<script>
    //默认导出一个对象
import axios from 'axios'
    import mheader from '../components/Header.vue'
    export default {
        data() {
            return {msg: 'hello',books:[]}
        },
        methods: {
          getbooks(){
            axios.get('/api/book').then(res=>{
              this.books=res.data;
            })
          },
          remove(id){
            axios.delete('/api/book?id='+id).then(res=>{
//              删除成功后将数据删除掉当前id的这一项
                this.books=this.books.filter(item=>item.id!=id)
            })
          }

        },
        components: {mheader},
        computed: {},
        created(){
            this.getbooks()
        },
      activated(){ //缓存后依然会走的函数
        this.getbooks() //虽然缓存 但是点进来 要重新获取数据
      }
    }
</script>
<style scoped lang="less">
    /*scoped只在当前有用*/
.list{
  margin: 10px 2%;
  li{
    border-bottom:1px dashed red ;
    padding: 20px 0;
    display: flex;
    img{
      width: 120px;
      height: 90px;
    }
    div{
      margin-left:15px;
      display: flex;
      flex-direction: column;//纵向布局
      .btn-list{
      margin-left: 0;
      display: flex;
      flex-direction: row;
        justify-content: space-around;
        button{
          width: 50px;
          height: 20px;
          background: linear-gradient(left top,lightseagreen,lightgreen);
          color: white;
        }
    }
    }

  }
}
</style>
