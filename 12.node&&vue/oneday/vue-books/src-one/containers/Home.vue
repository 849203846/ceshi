<template>
  <div class="page">
    <mheader title="珠"></mheader>
    <div class="scroll-content">
      <Swiper :swiperSlides="arr"></Swiper>

      <!--最新上架-->
      <h3> - 最新上架</h3>
      <ul class="hot-list" v-if="books.length">
        <li v-for="book in books">
          <img :src="book.bookCover" alt="">
          <span>{{book.bookName}}</span>
        </li>
      </ul>
      <loading v-else></loading>
    </div>
  </div>
</template>
<script>
  import mheader from '../components/Header.vue';
  import Swiper from '../components/Swiper.vue';
  import axios from 'axios'
  import Loading from '../components/Loading.vue'
  //默认导出一个对象
  export default {
    data() { //arr是轮播图数据 books是最新上架
      return {
        msg: 'hello', arr: [], books: []
      }
    },
    methods: {
      getHot() {
        axios.get('/api/hot').then(res => {
          setTimeout(() => {
            this.books = res.data;
          }, 3000)
        }).catch(err => {
          console.log(err);
        })


      }
    },
    components: {mheader, Swiper, Loading},
    computed: {},
    created() {//直接获取后台数据 跨域 8080=》3000 不靠谱
      this.getHot()
      axios.get('/api/sliders').then(res => {//箭头函数保证this指向
        this.arr = res.data
      }).catch(err => {
        console.log(err);
      })

    },
    activated() {
      this.getHot()
    }
  }
</script>
<style scoped lang="less">
  /*scoped只在当前有用*/
  h3 {
    line-height: 45px;
    color: #2d2d2d;
    padding: 1%;
  }

  .hot-list {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 33.33%;
      img {
        width: 100%;
      }
      span {
        color: #2e2e2e;
        display: inline-block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
