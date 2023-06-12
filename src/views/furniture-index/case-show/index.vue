<template>
  <section class="case_box">
    <div class="animate  case_cont" ref="caseCont">
      <title-txt :txtObj="txtObj"></title-txt>
      <ul class="tabs_menu">
        <li v-for="(item,index) in caseList" :key="index" :class="index===caseShow?'active_li':''" @click="caseShow=index">
          {{ item.caseTitle }}</li>
      </ul>
      <!-- 对应tabs每一项 -->
      <ul class="list_item">
        <!-- 动画所在的容器如果隐藏的（display:none;或不存在）则再次出现时，会执行容器上已有的动画。 -->
        <li v-for="(item,index) in caseList" :key="index" v-show="index===caseShow">
          <div class="animate animate_up item_box" v-for="(itemImg,imgIndex) in item.imgArr" :key="imgIndex"
            :style="`animation-delay: ${100*(imgIndex)}ms;`">
            <div class="img_box">
              <img :src="itemImg.img" alt="">
            </div>
            <div class="pop_txt">
              {{ itemImg.txt }}
            </div>
          </div>
        </li>
      </ul>
      <more-btn></more-btn>
    </div>
  </section>
</template>

<script>
import TitleTxt from '@/components/TitleTxt'
import MoreBtn from '@/components/MoreBtn'
import AnimateVisible from '@/mixin/animate-visible'
export default {
  name: 'CaseShow',
  components: { TitleTxt, MoreBtn },
  mixins: [AnimateVisible],
  data () {
    return {
      txtObj: {
        title: '案例展示',
        englishTxt: 'CASES'
      },
      caseShow: 0,
      // 案例
      caseList: [
        {
          caseTitle: '案例分类一',
          imgArr: [
            {
              img: require('@/assets/images/case1.jpg'),
              txt: '案例展示1'
            },
            {
              img: require('@/assets/images/case2.jpg'),
              txt: '案例展示2'
            },
            {
              img: require('@/assets/images/case3.jpg'),
              txt: '案例展示3'
            },
            {
              img: require('@/assets/images/case4.jpg'),
              txt: '案例展示4'
            }
          ]
        },
        {
          caseTitle: '案例分类二',
          imgArr: [
            {
              img: require('@/assets/images/case5.jpg'),
              txt: '案例展示5'
            },
            {
              img: require('@/assets/images/case6.jpg'),
              txt: '案例展示6'
            },
            {
              img: require('@/assets/images/case7.jpg'),
              txt: '案例展示7'
            },
            {
              img: require('@/assets/images/case8.jpg'),
              txt: '案例展示8'
            }
          ]
        },
        {
          caseTitle: '案例分类三',
          imgArr: [
            {
              img: require('@/assets/images/case9.jpg'),
              txt: '案例展示9'
            },
            {
              img: require('@/assets/images/case10.jpg'),
              txt: '案例展示10'
            },
            {
              img: require('@/assets/images/case11.jpg'),
              txt: '案例展示11'
            },
            {
              img: require('@/assets/images/case12.jpg'),
              txt: '案例展示12'
            }
          ]
        },
        {
          caseTitle: '案例分类四',
          imgArr: [
            {
              img: require('@/assets/images/case13.jpg'),
              txt: '案例展示13'
            },
            {
              img: require('@/assets/images/case14.jpg'),
              txt: '案例展示14'
            },
            {
              img: require('@/assets/images/case15.jpg'),
              txt: '案例展示15'
            },
            {
              img: require('@/assets/images/case16.jpg'),
              txt: '案例展示16'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.animateVisible(this.$refs.caseCont, 'animate_up')
  }
}
</script>

<style lang="scss" scoped>
.case_box {
  padding: 60px 0;
  background: #18191b;
  .case_cont {
    // animation-name: fadeInUp;
    text-align: center;

    .tabs_menu {
      display: flex;
      justify-content: center;
      > li {
        padding: 0 32px;
        line-height: 38px;
        font-size: 14px;
        color: #808080;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.5s ease 0s;
        &:not(&:last-child) {
          margin-right: 10px;
        }
        &:hover {
          background-color: #222326;
        }
      }
      li.active_li {
        background-color: #fab702;
        color: #222;
      }
    }
    .list_item {
      margin: 30px 0;

      > li {
        display: flex;
        .item_box {
          width: 25%;
          position: relative;
          cursor: pointer;
          // animation-name: fadeInUp;
          &:hover .pop_txt {
            background-color: rgba($color: #000000, $alpha: 0.8);
            color: rgba(250, 183, 2, 1);
          }
          &:hover .img_box > img {
            transform: scale(1.4);
          }
          .img_box {
            width: 100%;
            overflow: hidden;
            > img {
              width: 100%;
              vertical-align: top;
              transition: all 0.3s ease-out 0s;
            }
          }

          .pop_txt {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba($color: #000000, $alpha: 0);
            transition: all 0.3s ease-out 0s;
            color: rgba(250, 183, 2, 0);
            font-size: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .case_box {
    padding: 30px 0;
    .case_cont {
      padding: 0 10px;
      .tabs_menu {
        flex-wrap: wrap;
        > li {
          padding: 0 0.15rem;
        }
      }
      .list_item {
        > li {
          .item_box {
            .pop_txt {
              height: 25%;
              top: 75%;
              color: white;
              background-color: rgba($color: #000000, $alpha: 0.8);
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .case_box {
    padding: 30px 0;
    .case_cont {
      padding: 0 10px;
      .list_item {
        > li {
          flex-wrap: wrap;
          .item_box {
            width: 50%;
            // .pop_txt {
            //   height: 25%;
            //   top: 75%;
            //   color: white;
            //   background-color: rgba($color: #000000, $alpha: 0.8);
            // }
          }
        }
      }
    }
  }
}
</style>
