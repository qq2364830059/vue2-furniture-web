<template>
  <child-page-cont class="serve_project" title="服务项目" :list="projectList" :activeIndex="activeIndex" @asideBtn="menuBtn">
    <!-- tab栏切换得内容 -->
    <ul class="txt_list" v-for="(item,index) in projectList" :key="index" v-show="index===activeIndex">
      <li v-for="(contItem,contIndex) in item.conts" :key="contIndex">
        <p class="min_tit" v-if="contItem.minTit">{{ contItem.minTit }}</p>
        <p>{{ contItem.contTxt }}</p>
      </li>
    </ul>
  </child-page-cont>
</template>

<script>
import ChildPageCont from '@/components/ChildPageCont'
import { serve } from '@/api/child-page'
export default {
  name: 'ServeProject',
  components: { ChildPageCont },
  data () {
    return {
      activeIndex: 0,
      projectList: []
    }
  },
  created () {
    this.activeIndex = this.$route.params.id ? Number(this.$route.params.id) : 0
    serve().then((data) => {
      this.projectList = data
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
.serve_project {
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
