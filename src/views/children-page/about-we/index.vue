<template>
  <child-page-cont class="about_we" title="关于我们" :list="aboutList" :activeIndex="activeIndex" @asideBtn="menuBtn">
    <!-- tab栏切换得内容 -->
    <ul class="txt_list" v-for="(item,index) in aboutList" :key="index" v-show="index===activeIndex">
      <li v-for="(contItem,contIndex) in item.conts" :key="contIndex">
        <p class="min_tit" v-if="contItem.minTit">{{ contItem.minTit }}</p>
        <p>{{ contItem.contTxt }}</p>
      </li>
    </ul>
  </child-page-cont>
</template>

<script>
import ChildPageCont from '@/components/ChildPageCont'
import { about } from '@/api/child-page'
export default {
  name: 'AboutWe',
  components: { ChildPageCont },
  data () {
    return {
      activeIndex: 0,
      aboutList: []
    }
  },
  created () {
    this.activeIndex = this.$route.params.id ? Number(this.$route.params.id) : 0
    about().then((data) => {
      this.aboutList = data
      this.$bus.$emit('back')
    })
  },
  methods: {
    menuBtn (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.about_we {
  .txt_list {
    > li {
      p {
        font-size: 14px;
        line-height: 1.8;
        color: #ddd;
        margin-bottom: 15px;
      }
      .min_tit {
        font-weight: bold;
      }
    }
  }
}
</style>
