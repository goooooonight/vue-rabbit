<script setup>
import { useAddressForm } from '@/composables/useAddressForm'
import { ref, computed } from 'vue'

// 获取地址表单的对象、函数
const { formVisible, defaultForm, addrForm, addAddress, editAddress } =
  useAddressForm()

// 传入的地址对象
const address = ref()

// 打开弹窗
const openDialog = (addr) => {
  // 获取传入的地址对象
  address.value = addr
  // 如果传入地址 -- 修改地址
  if (addr) {
    // 对表单数据进行回显
    addrForm.value = { ...addr }
  }
  // 如果传入空值 -- 添加地址
  else {
    // 重置表单数据
    addrForm.value = { ...defaultForm }
  }
  // 使弹窗可见
  formVisible.value = true
}
// 开放打开弹窗函数
defineExpose({
  openDialog
})

// 根据弹窗类型选择标题
const title = computed(() => {
  if (address.value) {
    return '修改地址'
  } else {
    return '添加地址'
  }
})

// 通过编译宏生成emit方法
const emit = defineEmits(['update-address'])
// 提示父组件更新地址列表
const updateAddress = () => {
  emit('update-address')
}

// 提交表单
const handleCommit = async () => {
  // 如果传入地址 -- 修改地址
  if (address.value) {
    await editAddress(address.value.id)
  }
  // 如果传入空值 -- 添加地址
  else {
    await addAddress()
  }
  // 关闭弹窗
  formVisible.value = false
  // 提示父组件更新地址列表
  updateAddress()
}
</script>

<template>
  <el-dialog v-model="formVisible" :title="title" width="780">
    <!-- 添加/修改地址表单 -->
    <div class="flex justify-center">
      <el-form
        :model="addrForm"
        label-width="100"
        size="large"
        class="w-[500px]"
      >
        <!-- 收货人 -->
        <el-form-item label="收货人:">
          <el-input
            v-model="addrForm.receiver"
            placeholder="请输入收货人"
          ></el-input>
        </el-form-item>
        <!-- 手机号 -->
        <el-form-item label="手机号:">
          <el-input
            v-model="addrForm.contact"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <!-- 地区 -->
        <el-form-item label="地区:">
          <el-select placeholder="请选择所在地区"> </el-select>
        </el-form-item>
        <!-- 详细地址 -->
        <el-form-item label="详细地址:">
          <el-input
            v-model="addrForm.address"
            placeholder="请输入详细地址"
          ></el-input>
        </el-form-item>
        <!-- 邮政编码 -->
        <el-form-item label="邮政编码:">
          <el-input
            v-model="addrForm.postalCode"
            placeholder="请输入邮政编码"
          ></el-input>
        </el-form-item>
        <!-- 地址标签 -->
        <el-form-item label="地址标签:">
          <el-input
            v-model="addrForm.addressTags"
            placeholder="请输入地址标签，逗号分隔"
          ></el-input>
        </el-form-item>
        <!-- 取消和确认按钮 -->
        <el-form-item label-width="78">
          <el-button type="info" @click="formVisible = false" class="commit-btn"
            >取消</el-button
          >
          <el-button type="primary" @click="handleCommit" class="commit-btn">
            确认
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>

<style scoped></style>
