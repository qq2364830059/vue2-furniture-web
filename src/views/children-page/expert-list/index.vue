<template>
  <div class="expert_list">
    <div class="expert_cont">
      <div class="item_box" v-for="(item,index) in personInfo" :key="index">
        <div class="img_box">
          <img :src="item.img" alt="">
        </div>
        <h4>{{ item.name }}</h4>
        <p>职称：{{ item.jobName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getExpert } from '@/api/child-page'
export default {
  name: 'ExpertList',
  data () {
    return {
      personInfo: []
    }
  },
  created () {
    getExpert().then((data) => {
      this.personInfo = data
      this.$bus.$emit('back')
    })
  }
}
</script>

<style lang="scss" scoped>
.expert_list {
  width: 100%;
  padding: 80px 0;
  background: #18191b;

  .expert_cont {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 1200px) {
      width: 100%;
      padding: 0 15px;
    }

    .item_box {
      margin: 10px;
      .img_box {
        width: 220px;
        height: 295px;
        overflow: hidden;
        @media screen and (max-width: 1200px) {
          width: 127px;
          height: 170px;
        }
        > img {
          width: 100%;
          height: 100%;
          transition: all 0.3s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      > h4 {
        font-size: 14px;
        color: #ddd;
        margin: 10px 0;
      }
    }
  }
}
</style>
