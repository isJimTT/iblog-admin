import request from '@/utils/request'

export const loginApi = (data?: object) => {
  return request({
    method: 'post',
    url: '/login',
    data
  })
}
