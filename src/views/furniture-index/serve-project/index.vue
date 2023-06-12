<template>
  <section class="serve_project">
    <div class="animate  project_cont" ref="proCont">
      <title-txt :txtObj="txtObj"></title-txt>
      <div class="img_box">
        <el-row>
          <el-col :xs="24" :sm="6" class="item_box">
            <img src="@/assets/images/s1.jpg" alt="">
            <span>办公空间</span>
          </el-col>
          <el-col :xs="24" :sm="6" class="item_box">
            <img src="@/assets/images/s2.jpg" alt="">
            <span>商业空间</span>
          </el-col>
          <el-col :xs="24" :sm="6" class="item_box">
            <img src="@/assets/images/s3.jpg" alt="">
            <span>餐饮空间</span>
          </el-col>
          <el-col :xs="24" :sm="6" class="item_box">
            <img src="@/assets/images/s4.jpg" alt="">
            <span>娱乐空间</span>
          </el-col>
        </el-row>
        <el-row class="mq_row">
          <el-col :xs="24" :sm="6" class="item_box">
            <img src="@/assets/images/s5.jpg" alt="">
            <span>酒店会所</span>
          </el-col>
          <el-col :xs="24" :sm="6" class="item_box">
            <img src="@/assets/images/s6.jpg" alt="">
            <span>展示空间</span>
          </el-col>
          <el-col :xs="24" :sm="6" class="item_box">
            <img src="@/assets/images/s7.jpg" alt="">
            <span>教育空间</span>
          </el-col>
          <el-col :xs="24" :sm="6" class="item_box">
            <img src="@/assets/images/s8.jpg" alt="">
            <span>住宅空间</span>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script>
import TitleTxt from '@/components/TitleTxt'
import animateVisible from '@/mixin/animate-visible'
export default {
  name: 'ServeProject',
  components: { TitleTxt },
  mixins: [animateVisible],
  data () {
    return {
      txtObj: {
        title: '服务项目',
        englishTxt: 'SERVICES'
      }
    }
  },
  mounted () {
    this.animateVisible(this.$refs.proCont, 'animate_down')
  }
}
</script>

<style lang="scss" scoped>
.serve_project {
  padding: 60px 0;
  background: #121314;
  .project_cont {
    width: 1200px;
    margin: 0 auto;
    // animation-name: fadeInDown;

    .img_box {
      .item_box {
        text-align: center;
        padding: 0 1.5%;
        > img {
          display: block;
          width: 100%;
          margin: 0 auto 15px;
          cursor: pointer;
          &:hover {
            filter: brightness(80%);
          }
        }
        span {
          display: inline-block;
          margin-bottom: 15px;
          line-height: 1.8;
          font-size: 16px;
          color: #ddd;
          cursor: pointer;
          &:hover {
            color: #fab702;
          }
        }
      }
    }
    .mq_row {
      margin-top: 35px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .serve_project {
    padding: 30px 0;
    .project_cont {
      width: 100%;
      padding: 0 0.1rem;
    }
  }
}
@media screen and (max-width: 768px) {
  .serve_project {
    .project_cont {
      .img_box {
        .item_box {
          > img {
            width: 273px;
          }
        }
      }
    }
  }
}
</style>
