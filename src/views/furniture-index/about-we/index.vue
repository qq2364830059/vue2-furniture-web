<template>
  <section class="about_we">
    <div class="animate  about_cont" ref="aboutCont">
      <title-txt :txtObj="txtObj"></title-txt>
      <p class="txt">家居指的是家庭装修、家具配置、电器摆放等一系列和居室有关的甚至包括地理位置（家居风水）都属于家居范畴。从橱柜产生至 今，基本造型改动不大。而每年橱柜厂家推出的新品，主要体现
        在材料使用和细节改进设计两方面。虽然有很多新材料面市并尝试在橱柜上使用，但是使用新材料可能改变的只是一点点感受，但需要花费更多的金钱，所以传统的木、铝板、石、塑料、聚胺脂板等材料还是最佳选择。那么具备“享受设计”的橱柜呢？除了材料，橱柜是否具备“享受设计”要看这几方面：内部功能是否完备。就是说要具备洗涤、烹调、储藏三大基本功能。流程是否合理。最好是洗涤、备餐、烹调是按照自己的操作习惯，从某个方向开始，能以流水线的方式贯穿一···
      </p>
      <more-btn btnTxt="查看详情"></more-btn>
    </div>
  </section>
</template>

<script>
import TitleTxt from '@/components/TitleTxt'
import MoreBtn from '@/components/MoreBtn'
import animateVisible from '@/mixin/animate-visible'
export default {
  name: 'AboutWe',
  components: { TitleTxt, MoreBtn },
  mixins: [animateVisible],
  data () {
    return {
      txtObj: { title: '关于我们', englishTxt: 'ABOUT US' }
    }
  },
  mounted () {
    this.animateVisible(this.$refs.aboutCont, 'animate_up')
  }
}
</script>

<style lang="scss" scoped>
.about_we {
  padding: 60px 0;
  background-color: #18191b;
  .about_cont {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    // animation-name: fadeInUp;

    .txt {
      color: #ddd;
      font-size: 14px;
      line-height: 1.8;
      margin-bottom: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
}
@media screen and (max-width: 1200px) {
  .about_we {
    padding: 30px 0;
    .about_cont {
      width: 90%;
    }
  }
}
</style>
