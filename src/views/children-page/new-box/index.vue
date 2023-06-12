<template>
  <!-- 新闻资讯 -->
  <child-page-cont class="new_box" title="新闻资讯" :list="newList" :activeIndex="activeIndex" @asideBtn="menuBtn">
    <ul v-for="(item,index) in newList" :key="index" class="cont_list">
      <li v-for="(childItem,childIndex) in item.conts" :key="childIndex" v-show="childIndex===activeIndex">
        <img :src="childItem.img" alt="">
        <div class="r_txt">
          <h4>{{ childItem.tit }}</h4>
          <p>{{ childItem.txt }}</p>
        </div>
      </li>
    </ul>
  </child-page-cont>
</template>

<script>
import ChildPageCont from '@/components/ChildPageCont'
import { getNew } from '@/api/child-page'

export default {
  name: 'NewBox',
  components: { ChildPageCont },
  data () {
    return {
      activeIndex: 0,
      newList: []
    }
  },
  created () {
    this.activeIndex = this.$route.params.id ? Number(this.$route.params.id) : 0
    getNew().then((data) => {
      this.newList = data
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
.new_box {
  .cont_list {
    > li {
      display: flex;
      margin-bottom: 25px;
      padding-bottom: 25px;
      border-bottom: 1px dotted #333;
      > img {
        width: 220px;
        height: 146px;
        margin-right: 25px;
        @media screen and (max-width: 768px) {
          width: 140px;
          height: 93px;
        }
      }
      .r_txt {
        flex: 1;
        > h4 {
          font-size: 16px;
          line-height: 1.4;
          color: #ddd;
          margin-bottom: 15px;
        }
        p {
          color: #808080;
          font-size: 13px;
        }
      }
    }
  }
}
</style>
