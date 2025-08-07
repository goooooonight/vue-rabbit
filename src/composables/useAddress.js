import { ref, watch, onMounted } from 'vue'
import { getAddressAPI, deleteAddressAPI } from '@/api/address'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

export const useAddress = () => {
  // 选择的地址
  const activeAddr = ref('')
  // 地址列表
  const userAddresses = ref([])
  // 获取地址列表
  const getAddress = async () => {
    const {
      data: { result }
    } = await getAddressAPI()
    userAddresses.value = result
    if (result.length) {
      activeAddr.value = result[0].id
    }
  }
  onMounted(() => getAddress())

  // 根据地址id获取地址
  const getAddrById = (id) => {
    if (!id || !userAddresses.value.length) {
      return userAddresses.value[0]
    }
    return (
      userAddresses.value.find((addr) => addr.id === id) ||
      userAddresses.value[0]
    )
  }

  // 地址表单弹窗ref对象
  const dialogRef = ref()
  // 打开"添加地址弹窗"
  const openAdd = () => {
    dialogRef.value.openDialog()
  }
  // 打开"修改地址"弹窗
  const openEdit = (addr) => {
    dialogRef.value.openDialog(addr)
  }

  // 切换地址弹窗是否可见
  const switchVisible = ref(false)
  // 对话框内选择的地址
  const activeAddrDialog = ref('')
  // 当弹窗打开时对话框内选择的地址为真正选择的地址
  watch(switchVisible, () => {
    if (switchVisible.value) activeAddrDialog.value = activeAddr.value
  })
  // 确认切换地址
  const confirmSwitch = () => {
    activeAddr.value = activeAddrDialog.value
    switchVisible.value = false
  }

  // 删除地址
  const deleteAddress = async (id) => {
    const {
      data: { msg }
    } = await deleteAddressAPI(id)
    // 更新地址列表
    await getAddress()
    ElMessage.success(msg)
  }

  return {
    activeAddr,
    userAddresses,
    getAddress,
    dialogRef,
    openAdd,
    openEdit,
    switchVisible,
    activeAddrDialog,
    confirmSwitch,
    getAddrById,
    deleteAddress
  }
}
