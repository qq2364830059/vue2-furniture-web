import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/plugins/element-ui'
// import 'animate.css' //自己写了动画就不引入了

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  // 创建前，在Vue构造函数上添加一个 $bus 属性。安装全局事件总线。
  beforeCreate () {
    Vue.prototype.$bus = this // 把当前vm给这个$bus，使得$bus可以使用vm身上的方法和属性。
  }
}).$mount('#app')
