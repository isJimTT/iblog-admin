import request from '@/utils/request'

export const getNoticeListApi = () => {
  return request({
    method: 'get',
    url: '/notice'
  })
}

export const addNoticeApi = (data) => {
  return request({
    method: 'post',
    url: '/notice',
    data
  })
}

export const deleteNoticeApi = (noticeId) => {
  return request({
    method: 'delete',
    url: '/notice',
    params: {
      noticeId
    }
  })
}
