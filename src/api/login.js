import request from '@/utils/request'

// 登录
export const login = (form) => {
  return request.post('/login', form)
}
