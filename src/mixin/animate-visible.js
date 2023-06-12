export default {
  methods: {
    /**
     * 实现元素是否在视口上，才执行动画
     * @dom 元素节点
     * @animateName  动画类名
     * 不推荐写的这个来实现效果，推荐使用ScrollReveal插件来实现对应的动画效果
     * */
    animateVisible (dom, animateName) {
      // 可以使用 IntersectionObserver API 监听元素的可见性，当元素进入视口时添加 CSS 类来触发动画。
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // console.log(entry.isIntersecting, entry.target.getBoundingClientRect())

          // 判断是否 进入视口
          if (entry.isIntersecting) {
            const rect = entry.target.getBoundingClientRect() // 获取目标元素的边框尺寸及其相对于视口左上角的坐标
            /**
             * rect.bottom 元素的底部到视口顶部的距离
             * rect.top  元素顶部到视口顶部的距离
             * */
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
              // 当矩形与视口有交集时执行。
              entry.target.classList.add(animateName)
              // 停止观察
              observer.unobserve(dom)
            }
          }
        })
      }, {
        //  页面初始时元素的边框在视口边框之内，即使你尚未滚动页面到该元素所在的位置，IntersectionObserver 也会将其视为可见
        threshold: [0] // 设置当视口与该元素相交时执行回调
      })
      // 开始观察
      observer.observe(dom)
    }
  }

}
