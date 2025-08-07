import request from '@/utils/request'

// 添加收货地址
export const addAddressAPI = (formObj) => {
  return request.post('/member/address', formObj)
}

// 获取收货地址
export const getAddressAPI = () => {
  return request.get('/member/address')
}

// 修改收货地址
export const editAddressAPI = (id, formObj) => {
  return request.put(`/member/address/${id}`, formObj)
}

// 删除收货地址
export const deleteAddressAPI = (id) => {
  return request.delete(`/member/address/${id}`)
}
