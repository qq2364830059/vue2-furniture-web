<template>
  <!-- 联系我们 -->
  <div class="contact_box">
    <div class="contact_cont">
      <p>南京市某某家居有限公司</p>
      <p>电话：400-888-8888</p>
      <p>手机：13588889999</p>
      <p>邮箱：admin@admin.com </p>
      <p>地址：江苏省南京市玄武区玄武湖</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactBox',
  data () {
    return {}
  },
  created () {
    this.$bus.$emit('back')
  }
}
</script>

<style lang="scss" scoped>
.contact_box {
  width: 100%;
  padding: 80px 0;
  background: #18191b;
  .contact_cont {
    width: 1200px;
    margin: 0 auto;
    p {
      line-height: 1.8;
      color: #ddd;
      font-size: 15px;
      margin-bottom: 15px;
    }
  }
}
</style>
