<template>
  <!-- 首页中每一部分公共标题 -->
  <div class="title_box">
    <h3>{{ txtObj.title }}</h3>
    <div class="us">
      <em></em>
      <span>{{ txtObj.englishTxt }}</span>
      <em></em>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleTxt',
  props: {
    txtObj: {
      type: Object,
      required: true,
      default: () => {
        return {
          title: '关于我们',
          englishTxt: 'ABOUT US'
        }
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.title_box {
  text-align: center;
  > h3 {
    margin-bottom: 20px;
    font-size: 26px;
    font-weight: 444;
    color: #ddd;
  }
  .us {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
    span {
      padding: 0 15px;
      font-size: 16px;
      color: #999;
    }
    em {
      display: block;
      width: 65px;
      height: 1px;
      background: #999;
    }
  }
}
</style>
