<template>
  <div id="app">
    <div class="main" ref="main" :style="`margin-top:${contTop};`">
      <!-- 导航栏 -->
      <nav-head @animatePush="toPush"></nav-head>
      <router-view />
    </div>
    <div class="pop_box" :style="`z-index:${zIndex};top:${top};`" v-loading="loading" element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading" element-loading-background="#18191b"></div>
  </div>
</template>

<script>
import NavHead from '@/components/NavHead'

export default {
  name: 'App',
  components: { NavHead },
  watch: {
    // 监听路由变化,监听不到根路由的变化，
    /**
     * 当路由从一个非空的子路径（例如‘/foo‘）切换到根路径‘/‘时，虽然‘route对象的属性发生了变化，但实际上‘本身并没有变化，因此‘route‘本身并没有变化，因此‘watch` 方法并不会捕获到该变化。
     * */
    $route (to, from) {}
  },
  data () {
    return {
      contTop: '0', // 内容缩放后距离顶部的距离
      zIndex: -1, // 遮挡层的层级
      top: '100vh', // 遮挡层的位置
      loading: false // 遮挡层的加载状态
    }
  },
  mounted () {
    this.$bus.$on('back', this.pageHandler)
  },
  beforeDestroy () {
    this.$bus.$off('back')
  },
  methods: {
    toPush (path, params) {
      this.$refs.main.style.transform = 'scale(0.8)' // transform: scale(${scaleSize}); 这里不能再main元素上设置transform，因为会影响子项的fixed固定定位
      this.contTop = '200px'
      setTimeout(() => {
        this.zIndex = 1
        this.top = 0
        this.loading = true

        setTimeout(() => {
          // 判断params是否存在
          const p = params !== undefined ? `${path}/${params}` : path
          this.$router.push({ path: p })
        }, 1000)
      }, 1000)
    },
    pageHandler () {
      this.$refs.main.style.transform = ''
      this.contTop = 0
      this.loading = false
      this.zIndex = -1
      this.top = '100vh'
    }
  }
}
</script>

<style lang="scss">
// 设置向上的动画
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

// 设置向下的动画
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

.animate {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-timing-function: ease;
}
.animate_up {
  animation-name: fadeInUp;
}
.animate_down {
  animation-name: fadeInDown;
}

html {
  /*1rem = 100px;   720设计稿*/
  font-size: calc(100vw / 7.2);
  font-size: -webkit-calc(100vw / 7.2);
  -webkit-text-size-adjust: 100%;
  /*去除高亮*/
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#app {
  width: 100%;
  background: url('@/assets/images/body_bg.jpg') top center fixed;
  position: relative;
  overflow: hidden;

  .main {
    transform-origin: center top;
    transition: all 1s;
  }
  .pop_box {
    width: 100%;
    height: 100vh;
    background-color: #18191b;
    position: fixed;
    // top: 100vh;
    left: 0;
    transition: all 1s;
    // z-index: -1;
  }
}
</style>
