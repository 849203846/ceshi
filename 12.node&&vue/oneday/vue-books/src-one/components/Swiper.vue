<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
      <img :src="slide" alt="" style="width: 100%">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:["swiperSlides"],
    data() {
      return {
        swiperOption: {
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          observeParents:true,
          loop:true
        },

      }
    },
//    mounted() {
//      setInterval(() => {
//        console.log('simulate async data')
//        let swiperSlides = this.swiperSlides
//
//      })
//    }

  }
</script>

<style scoped>
    /*scoped只在当前有用*/

</style>
