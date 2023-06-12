<template>
  <div class="furniture_index">
    <!-- 轮播图 -->
    <my-swiper></my-swiper>
    <!-- 关于我们 -->
    <about-we></about-we>
    <!-- 服务项目 -->
    <serve-project></serve-project>
    <!-- 案例展示 -->
    <case-show></case-show>
    <!-- 服务流程 -->
    <serve-flow></serve-flow>
    <!-- 新闻资讯 -->
    <new-box></new-box>
    <!-- 底部 -->
    <foot-box></foot-box>
    <!-- 回到顶部 -->
    <backtop-box></backtop-box>
  </div>
</template>

<script>
import FootBox from '@/components/FootBox'
import MySwiper from './my-swiper'
import AboutWe from './about-we'
import ServeProject from './serve-project'
import CaseShow from './case-show'
import ServeFlow from './serve-flow'
import NewBox from './new-box'
import BacktopBox from '@/components/BacktopBox'
export default {
  name: 'FurnitureIndex',
  components: {
    FootBox,
    MySwiper,
    AboutWe,
    ServeProject,
    CaseShow,
    ServeFlow,
    NewBox,
    BacktopBox
  },
  data () {
    return {}
  },
  created () {
    this.$bus.$emit('back')
  },
  mounted () {
    // beforeunload  监听所有窗口关闭事件（例如用户刷新或离开页面）并将当前滚动位置存储到浏览器的 sessionStorage 中
    // window.addEventListener('beforeunload', this.setScroll)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.furniture_index {
  overflow: hidden; //用于防止fadeInDown动画从下往上时，y轴-100%出现的问题，因为translate不会脱离文档流。就会在一定的时间内出现多余的滚动条
}
</style>
