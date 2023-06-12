<template>
  <section class="my_swiper">
    <div class="swiper" ref="mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
      <div class="swiper-pagination" ref="swiperPagination"></div>
      <!--分页器。如果放置在swiper外面，需要自定义样式。-->
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper' // 注意引入的是Swiper
import 'swiper/css/swiper.min.css' // 注意这里的引入css
import { getSwiper } from '@/api/home'
export default {
  name: 'MySwiper',
  data () {
    return {
      swiperList: []
    }
  },
  mounted () {
    getSwiper().then((data) => {
      this.swiperList = data
      // DOM元素更新完，立即执行
      this.$nextTick(() => {
        const mySwiper = new Swiper(this.$refs.mySwiper, {
          autoplay: true, // 可选选项，自动滑动
          loop: true,
          pagination: {
            el: this.$refs.swiperPagination
          }
        })
        console.log(mySwiper)
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.my_swiper {
  width: 100%;
  overflow: hidden;
  .swiper {
    position: relative;
    --swiper-theme-color: #fab702;
    .swiper-slide {
      width: 100%;
      > img {
        width: 100%;
        vertical-align: top;
      }
    }
    .swiper-pagination {
      z-index: 5;
      ::v-deep .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background: #ccc;
        opacity: 1;
      }
      ::v-deep .swiper-pagination-bullet-active {
        background: #fab702;
      }
    }
  }
}
</style>
