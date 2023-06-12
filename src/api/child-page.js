import request from '@/utils/request'

// 获取关于我们页面数据
export function about () {
  return request(
    {
      url: '/child-page/about',
      method: 'get'
    }
  )
}

// 获取服务项目
export function serve () {
  return request({
    url: '/child-page/serve-project',
    method: 'get'
  })
}

// 案例展示
export function caseShow () {
  return request({
    url: '/child-page/case',
    method: 'get'
  })
}

// 新闻资讯
export function getNew () {
  return request({
    url: '/child-page/new',
    method: 'get'
  })
}

// 专家页面
export function getExpert () {
  return request({
    url: '/child-page/expert',
    method: 'get'
  })
}

// 人才资源
export function getTalents () {
  return request({
    url: '/child-page/talents',
    method: 'get'
  })
}
