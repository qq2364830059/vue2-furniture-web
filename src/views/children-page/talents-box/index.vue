<template>
  <!-- 人力资源 -->
  <child-page-cont class="talents_box" title="新闻资讯" :list="talentsList" :activeIndex="activeIndex" @asideBtn="menuBtn">
    <div v-show="activeIndex===0" v-html=" talentsList[0] && talentsList[0].conts ">
    </div>
    <div v-show="activeIndex===1" v-html=" talentsList[1] && talentsList[1].conts">
    </div>
  </child-page-cont>
</template>

<script>
// 使用 DOMPurify 插件防止v-htmlxss攻击，会去除掉标签上的事件
import * as DOMPurify from 'dompurify'

import ChildPageCont from '@/components/ChildPageCont'
import { getTalents } from '@/api/child-page'
export default {
  name: 'TalentsBox',
  components: { ChildPageCont },
  data () {
    return {
      activeIndex: 0,
      talentsList: []
    }
  },
  created () {
    this.activeIndex = this.$route.params.id ? Number(this.$route.params.id) : 0
    getTalents().then((data) => {
      this.talentsList = data
      this.talentsList.forEach((item) => {
        // 防止xss攻击
        item.conts = DOMPurify.sanitize(item.conts)
      })
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

<style lang="scss" >
.talents_box {
  p {
    line-height: 1.8;
    margin-bottom: 15px;
    color: #ddd;
    font-size: 14px;
  }
}
</style>
