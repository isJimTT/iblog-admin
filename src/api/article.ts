import request from '@/utils/request'

export const getArticleListApi = (state?: string, page?: number, pageSize?: number) => {
  return request({
    method: 'get',
    url: '/article',
    params: {
      state,
      page,
      pageSize
    }
  })
}

export const getArticleClassApi = () => {
  return request({
    method: 'get',
    url: '/article/class'
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
