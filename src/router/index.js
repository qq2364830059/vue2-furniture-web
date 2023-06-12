import Vue from 'vue'
import VueRouter from 'vue-router'
import FurnitreIndex from '@/views/furniture-index'

Vue.use(VueRouter)

// 避免到当前位置的冗余导航。 简单来说就是重复触发了同一个路由。 解决重复点击导航时，控制台出现报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) { // 重写vue的push
  return originalPush.call(this, location).catch(err => err) // 使用catch捕获异常（报错）
}

// 重写replace方法,达到上面的效果
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function push (location) { // 重写vue的replace方法
  return originalReplace.call(this, location).catch(err => err) // 使用catch捕获异常（报错）
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: FurnitreIndex,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/child-page',
    component: () => import('@/views/children-page'),
    redirect: '/about-we',
    children: [
      {
        path: '/about-we/:id?',
        name: 'about-we',
        component: () => import('@/views/children-page/about-we'),
        meta: {
          title: '关于我们'
        }
      },
      {
        path: '/serve-project/:id?',
        name: 'serve-project',
        component: () => import('@/views/children-page/serve-project'),
        meta: {
          title: '服务项目'
        }
      },
      {
        path: '/case-show/:id?',
        name: 'case-show',
        component: () => import('@/views/children-page/case-show'),
        meta: {
          title: '案例展示'
        }
      },
      {
        path: '/new-box/:id?',
        name: 'new-box',
        component: () => import('@/views/children-page/new-box'),
        meta: {
          title: '新闻咨询'
        }
      },
      {
        path: '/expert-list',
        name: 'expert-list',
        component: () => import('@/views/children-page/expert-list'),
        meta: {
          title: '专家团队'
        }
      },
      {
        path: '/talents-box/:id?',
        name: 'talents-box',
        component: () => import('@/views/children-page/talents-box'),
        meta: {
          title: '人力资源'
        }
      },
      {
        path: '/contact-box',
        name: 'contact-box',
        component: () => import('@/views/children-page/contact-box'),
        meta: {
          title: '联系我们'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes

})

export default router
