import request from '@/utils/request'

export const getArticleListApi = (state?: string) => {
  return request({
    method: 'get',
    url: '/article',
    params: {
      state
    }
  })
}

export const addArticleApi = (data) => {
  return request({
    method: 'post',
    url: '/article',
    data
  })
}

export const deleteArticleApi = (articleId) => {
  return request({
    method: 'delete',
    url: '/article',
    params: {
      articleId
    }
  })
}
