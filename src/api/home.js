import request from '@/utils/request'

// 获取侧边栏
export function aside () {
  return request({
    url: '/home/aside',
    method: 'get'
  })
}

// 轮播图
export function getSwiper () {
  return request({
    url: '/home/swiper',
    method: 'get'
  })
}
