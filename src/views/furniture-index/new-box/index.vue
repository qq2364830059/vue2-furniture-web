<template>
  <section class="new_box">
    <div class="animate new_cont" ref="news">
      <TitleTxt :txtObj="txtObj"></TitleTxt>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12">
          <el-row :gutter="20" class="item_row">
            <el-col :xs="4" :sm="4">
              <div class="day">07</div>
              <div class="year_month">2023-04</div>
            </el-col>
            <el-col :xs="20" :sm="20">
              <h4>您的内部指南：什么是竞争环境分析？</h4>
              <p class="txt">在本文中，您将了解什么是竞争环境分析，为什么它是必要的，以及如何进行竞争环境分析。自行车比赛是世界上···</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-row :gutter="20" class="item_row">
            <el-col :xs="4" :sm="4">
              <div class="day">07</div>
              <div class="year_month">2023-04</div>
            </el-col>
            <el-col :xs="20" :sm="20">
              <h4>想进行竞争分析吗？以下是你应该做的7个理由</h4>
              <p class="txt">你想进行竞争分析，以更好地了解竞争对手，推出新产品，甚至获得更多关于营销策略的想法吗？让我们看看你该···</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-row :gutter="20" class="item_row">
            <el-col :xs="4" :sm="4">
              <div class="day">07</div>
              <div class="year_month">2023-04</div>
            </el-col>
            <el-col :xs="20" :sm="20">
              <h4>什么是网站策略？为什么你需要它以及你如何做到</h4>
              <p class="txt">网站是您企业营销和销售成功的重要组成部分，但您如何开始，如何构建符合您的营销和业务目标的网站战略？每···</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-row :gutter="20" class="item_row">
            <el-col :xs="4" :sm="4">
              <div class="day">07</div>
              <div class="year_month">2023-04</div>
            </el-col>
            <el-col :xs="20" :sm="20">
              <h4>微观和宏观影响者：如何工作</h4>
              <p class="txt">营销的形式正在改变。如果最初我们信任广告，现在我们信任谈论不同类型产品的影响者。这些天，有影响力的人···</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-row :gutter="20" class="item_row">
            <el-col :xs="4" :sm="4">
              <div class="day">07</div>
              <div class="year_month">2023-04</div>
            </el-col>
            <el-col :xs="20" :sm="20">
              <h4>如何进行竞争性定价分析</h4>
              <p class="txt">重要的是要记住，我们在这里的使命是提供一种产品或服务，可以在竞争中获得竞争优势，但您仍然希望获得利润···</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-row :gutter="20" class="item_row">
            <el-col :xs="4" :sm="4">
              <div class="day">07</div>
              <div class="year_month">2023-04</div>
            </el-col>
            <el-col :xs="20" :sm="20">
              <h4>如何制定营销策略：你需要知道的一切</h4>
              <p class="txt">一个精心调整的营销策略可以让你的品牌获得成功。尽管制定营销策略的原则保持不变，但仅在2022年，我们就看···</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import TitleTxt from '@/components/TitleTxt'
import animateVisible from '@/mixin/animate-visible'
export default {
  name: 'NewBox',
  components: { TitleTxt },
  mixins: [animateVisible],
  data () {
    return {
      txtObj: {
        title: '新闻资讯',
        englishTxt: 'NEWS'
      }
    }
  },
  mounted () {
    this.animateVisible(this.$refs.news, 'animate_up')
  }
}
</script>

<style lang="scss" scoped>
.new_box {
  padding: 60px 0;
  background: #18191b;
  .new_cont {
    width: 1200px;
    margin: 0 auto;
    .item_row {
      margin-bottom: 30px;
      .day {
        line-height: 50px;
        border-bottom: 1px solid #18191b;
        color: #999;
        font-size: 30px;
        text-align: center;
        background: #222326;
      }
      .year_month {
        text-align: center;
        background: #222326;
        line-height: 22px;
        font-size: 12px;
      }
      h4 {
        color: #ddd;
        font-size: 16px;
        line-height: 1.4;
        margin-bottom: 15px;
        cursor: pointer;

        &:hover {
          color: #fab702;
        }
      }
      .txt {
        line-height: 1.6;
        font-size: 13px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .new_box {
    padding: 30px 0;
    .new_cont {
      width: 100%;
      padding: 0 15px;
    }
  }
}
</style>
