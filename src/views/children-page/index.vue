<template>
  <div class="children_page">
    <div class="img_box">
      <img src="@/assets/images/children_img.jpg" alt="">
    </div>
    <router-view></router-view>
    <foot-box></foot-box>
    <!-- 回到顶部 -->
    <backtop-box></backtop-box>
  </div>
</template>

<script>
import FootBox from '@/components/FootBox'
import BacktopBox from '@/components/BacktopBox'
export default {
  name: 'ChildrenPage',
  components: { FootBox, BacktopBox },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.children_page {
  overflow: hidden;
  .img_box {
    > img {
      width: 100%;
      object-fit: cover; /* 等比例缩放并裁剪图片 */
      vertical-align: top;
    }
    @media screen and (max-width: 640px) {
      > img {
        height: 240px;
      }
    }
  }
}
</style>
