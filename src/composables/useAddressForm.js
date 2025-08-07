import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { addAddressAPI, editAddressAPI } from '@/api/address'

export const useAddressForm = () => {
  // 地址表单弹窗是否可见
  const formVisible = ref(false)

  // 默认表单对象
  const defaultForm = {
    receiver: '', // 收货人姓名
    contact: '', // 收货人联系方式
    provinceCode: '210000', // 省份编码
    cityCode: '210200', // 城市编码
    countyCode: '210202', // 地区编码
    address: '', // 详细地址
    postalCode: '', // 邮政编码
    addressTags: '', // 地址标签
    isDefault: '1', // 收货地址是否默认
    fullLocation: '阿巴省 阿巴市 阿巴区' // 完整地址
  }
  // 表单对象
  const addrForm = ref({ ...defaultForm })

  // 新增收货地址
  const addAddress = async () => {
    const {
      data: { msg }
    } = await addAddressAPI(addrForm.value)
    ElMessage.success(msg)
  }

  // 修改地址
  const editAddress = async (id) => {
    const {
      data: { msg }
    } = await editAddressAPI(id, addrForm.value)
    ElMessage.success(msg)
  }

  return {
    formVisible,
    defaultForm,
    addrForm,
    addAddress,
    editAddress
  }
}
