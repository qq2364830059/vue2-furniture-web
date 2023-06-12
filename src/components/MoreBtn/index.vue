<template>
  <!-- 按钮 -->
  <button class="sel_edit">{{ btnTxt }}&nbsp;></button>
</template>

<script>
export default {
  name: 'MoreBtn',
  props: {
    btnTxt: {
      type: String,
      default: '查看更多'
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.sel_edit {
  border: 1px solid #666;
  color: #808080;
  line-height: 34px;
  padding: 0 35px;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  &:hover {
    background-color: #fab702;
    border-color: #fab702;
    color: #222;
  }
}
</style>
