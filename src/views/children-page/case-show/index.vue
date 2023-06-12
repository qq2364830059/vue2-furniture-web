<template>
  <child-page-cont class="case_box" title="案例展示" :list="caseList" :activeIndex="activeIndex" @asideBtn="menuBtn">
    <div class="img_list" v-for="(item,index) in  caseList" :key="index" v-show="index===activeIndex">
      <el-row class="item_row" :gutter="26">
        <el-col :xs="24" :sm="12" :md="8" :lg="8" v-for="(contItem,contIndex) in item.imgArr" :key="contIndex"
          class="animate animate_up item" :style="`animation-delay: ${100*(contIndex)}ms;`">
          <div class="img_box">
            <img :src="contItem.img" alt="">
          </div>
          <span>{{ contItem.txt }}</span>
        </el-col>
      </el-row>
    </div>
  </child-page-cont>
</template>

<script>
import ChildPageCont from '@/components/ChildPageCont'
import { caseShow } from '@/api/child-page'
export default {
  name: 'CaseShow',
  components: { ChildPageCont },
  data () {
    return {
      activeIndex: 0,
      caseList: []
    }
  },
  created () {
    this.activeIndex = this.$route.params.id ? Number(this.$route.params.id) : 0
    caseShow().then((data) => {
      this.caseList = data
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
.case_box {
  .img_list {
    .item_row {
      .item {
        text-align: center;
        margin-bottom: 20px;
        .img_box {
          width: 100%;
          overflow: hidden;
          cursor: pointer;
          margin-bottom: 10px;

          img {
            width: 100%;
            vertical-align: top;
            transition: all 0.3s ease-out 0s;
            &:hover {
              transform: scale(1.4);
            }
          }
        }

        span {
          color: #ddd;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            color: #fab702;
          }
        }
      }
    }
  }
}
</style>
