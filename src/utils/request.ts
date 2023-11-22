export const BASE_URL = 'http://localhost:8001'
export const TIME_OUT = 6000

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const service: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: TIME_OUT
})

// 请求前拦截
service.interceptors.request.use((config: AxiosRequestConfig) => {
  const Authorization =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJqaW10dCIsImlhdCI6MTcwMDU2NzcyNCwiZXhwIjoxNzAwNjU0MTI0fQ.VUaRDi9s_6uXVSdeRKJ0p52-7wx0ouJ1WXqjXKouL1U'
  if (config && config.headers && Authorization) {
    config.headers.Authorization = Authorization
  }
  return config
})

const request = async (config: AxiosRequestConfig) => {
  try {
    const response = await service.request(config)
    const { code, msg } = response.data
    if (code !== 200) {
      switch (code) {
        case 401:
          // redirectLogin()
          break
        case 402:
          console.log(msg)

          break
        case 403:
          console.log(msg)
          break
        case 405:
          console.log(msg)
          break
        default:
          console.log('系统未知错误')
      }
      return {
        code: -1,
        msg: 'error',
        data: null as any
      }
    }
    return response.data
  } catch (err: any) {
    if (!window.navigator.onLine) {
      errorInfoRet('请检查网络连接')
    }
    return {
      code: -1,
      msg: 'error',
      data: null as any
    }
  }
}

// const redirectLogin = () => {
//   message.warning('用户登录已过期, 即将跳转到登录页面重新登录')
//   removeToken()
//   window.location.href = '/login'
// }

const errorInfoRet = (msg: string) => {
  return {
    code: -1,
    msg,
    data: null as any
  }
}
export default request
