<template>
  <!-- 回到顶部 -->
  <div class="fixed_box">
    <el-backtop :bottom="100" :right="50">
      <div style="{
         height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.3);
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }">
        <img src="@/assets/images/icon-gotop-fixed.gif" alt="">
      </div>
    </el-backtop>
  </div>

</template>

<script>
export default {
  name: 'BacktopBox',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.fixed_box {
  ::v-deep .el-backtop {
    border-radius: 0;
    background: none;
  }
}
</style>
