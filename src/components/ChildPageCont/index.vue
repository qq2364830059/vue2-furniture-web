<template>
  <!-- 除去首页，其他页面公共部分 -->
  <section class="cont_box">
    <div class="center_box">
      <aside class="aside_menu">
        <h4>{{ title }}</h4>
        <ul class="menu_list">
          <li v-for="(item,index) in list" :key="index" :class="index===activeIndex?'active_li':''" @click="menuBtn(index)">
            {{item && item.tabTxt }}</li>
        </ul>
      </aside>
      <section class="item_box">
        <div class="title_top">
          <h5>{{list[activeIndex] && list[activeIndex].tabTxt }}</h5>
          <div class="r_breadcrumb ">
            <img src="@/assets/images/icon-home.png" alt="">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{ this.$route.meta.title }}</el-breadcrumb-item>
              <el-breadcrumb-item>{{list[activeIndex] &&  list[activeIndex].tabTxt }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <!-- tab栏切换得内容 -->
        <slot></slot>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ChildPageCont',
  props: {
    title: {
      type: String,
      required: true
    },
    // 列表项
    list: {
      type: Array,
      required: true,
      default: () => [
        {
          tabTxt: '公司简介',
          conts: []
        },
        {
          tabTxt: '企业文化',
          conts: []
        },
        {
          tabTxt: '发展历程',
          conts: []
        }
      ]
    },
    // 选中项
    activeIndex: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data () {
    return {}
  },
  methods: {
    menuBtn (index) {
      this.$emit('asideBtn', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.cont_box {
  padding-top: 140px;
  padding-bottom: 55px;
  background: #18191b;
  .center_box {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .aside_menu {
      > h4 {
        padding: 5px 0 15px;
        color: #ddd;
        font-weight: 400;
        font-size: 20px;
      }
      .menu_list {
        > li {
          width: 260px;
          padding: 17px 35px 17px 20px;
          color: #ddd;
          font-size: 14px;
          background: #111;
          margin-bottom: 8px;
          cursor: pointer;
          transition: all 0.3s;
          &:hover {
            color: #fab702;
          }
        }
        .active_li {
          background-color: #fab702;
          color: #222 !important;
        }
      }
    }
    .item_box {
      width: 900px;
      .title_top {
        display: flex;
        justify-content: space-between;
        line-height: 48px;
        border-bottom: 1px solid #333;
        margin-bottom: 30px;
        > h5 {
          font-size: 16px;
          color: white;
        }
        .r_breadcrumb {
          display: flex;
          align-items: center;

          > img {
            margin-right: 10px;
          }
          ::v-deep .el-breadcrumb__separator {
            color: #808080;
          }
          ::v-deep .el-breadcrumb__inner a,
          ::v-deep .el-breadcrumb__inner.is-link {
            color: #808080;
            &:hover {
              color: #fab702;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .cont_box {
    .center_box {
      width: 100%;
      padding: 0 15px;
      display: block;
      .aside_menu {
        .menu_list {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
      }
      .item_box {
        width: 100%;
      }
    }
  }
}
</style>
