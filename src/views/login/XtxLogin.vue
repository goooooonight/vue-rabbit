<script setup>
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { login } from '@/api/login'

import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

import { useUserStore } from '@/stores'
import { mergeCartAPI } from '@/api/cart'
import { useCart } from '@/composables/useCart'

// 表单对象
const loginForm = ref({
  // 账户
  account: '',
  // 密码
  password: '',
  // 是否同意条款
  isAgree: false
})

// 表单dom对象
const form = ref()
// 表单校验规则
const rules = {
  account: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 24, message: '密码长度应为6-4个字符' }
  ],
  isAgree: [
    {
      required: true,
      validator: (rule, value, callback) => {
        if (!value) {
          callback(new Error('请勾选同意隐私条款和服务条款!'))
        } else {
          callback()
        }
      },
      trigger: 'change'
    }
  ]
}

// 定义路由对象
const router = useRouter()
// 登录函数
const loginFun = async () => {
  try {
    // 表单校验
    await form.value.validate()
    // 发送登录请求
    const {
      data: { result }
    } = await login({
      account: loginForm.value.account,
      password: loginForm.value.password
    })

    // 将用户信息存入piana
    const { setUserInfo } = useUserStore()
    setUserInfo(result)

    // 合并购物车
    const { cartStore, cartList } = useCart()
    await mergeCartAPI(
      cartList.value.map(({ skuId, selected, count }) => ({
        skuId,
        selected,
        count
      }))
    )
    // 合并完成后清空本地购物车
    cartStore.clearCart()
    // 获取购物车
    cartStore.getCartFromServer()

    // 登录成功提示
    ElMessage({
      message: '登录成功!',
      type: 'success'
    })

    // 跳转到首页
    router.replace('/')
  } catch (error) {
    // 打印错误信息
    console.error(error)
  }
}
</script>

<template>
  <!-- 页面头部 -->
  <header class="bg-white">
    <div class="xtx-container flex justify-between items-end">
      <!-- logo -->
      <h1
        class="logo w-[200px] h-[132px] bg-[url(/src/assets/images/logo.png)] bg-[position:center_18px] bg-contain bg-no-repeat flex-shrink-0"
      >
        <RouterLink to="/" class="h-full block">小兔鲜</RouterLink>
      </h1>
      <RouterLink to="/" class="mb-[30px] text-[18px] flex items-center"
        >进入网站首页
        <el-icon color="#27ba9b" class="ml-2 -mr-2"><ArrowRight /></el-icon
        ><el-icon color="#27ba9b"><ArrowRight /></el-icon
      ></RouterLink>
    </div>
  </header>
  <!-- 页面主体 -->
  <main
    class="h-[488px] bg-[url(/src/assets/images/login-bg.png)] bg-center bg-no-repeat bg-cover relative"
  >
    <div
      class="w-[420px] h-[300px] rounded-[2px] bg-white absolute top-[60px] right-1/6"
    >
      <!-- 表单标题 -->
      <h3
        class="text-[20px] font-bold text-center leading-[60px] border-b border-b-[#f5f5f5]"
      >
        账户登录
      </h3>
      <!-- 登录表单 -->
      <el-form
        :model="loginForm"
        ref="form"
        :rules="rules"
        status-icon
        class="px-[30px] py-[25px] flex flex-col items-center"
      >
        <!-- 账户输入框 -->
        <el-form-item label="账户" prop="account" class="w-full">
          <el-input
            v-model="loginForm.account"
            placeholder="请输入账户"
          ></el-input>
        </el-form-item>
        <!-- 密码输入框 -->
        <el-form-item label="密码" prop="password" class="w-full">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <!-- 同意条款 -->
        <el-form-item class="mr-auto" prop="isAgree">
          <el-checkbox v-model="loginForm.isAgree"
            ><p class="flex items-center gap-1">
              我已同意
              <el-link type="primary" underline="never">隐私条款</el-link>和
              <el-link type="primary" underline="never">服务条款</el-link>
            </p>
          </el-checkbox>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item class="w-full">
          <el-button
            type="primary"
            size="large"
            class="w-full"
            @click="loginFun"
            >点击登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </main>
  <!-- 页面底部 -->
  <footer>
    <!-- 底部信息 -->
    <div class="h-[120px] bg-white">
      <div class="pt-[50px]">
        <ul class="flex justify-center">
          <li>关于我们</li>
          <li>帮助中心</li>
          <li>售后服务</li>
          <li>配送与验收</li>
          <li>商务合作</li>
          <li>搜索推荐</li>
          <li>友情链接</li>
        </ul>
        <div class="mt-[25px] text-center text-[#999]">CopyRight@小兔鲜儿</div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
// 头部样式
header {
  .logo {
    a {
      color: transparent;
    }
  }
  a {
    color: #333;
  }
}

h3 {
  color: $xtxColor;
}
// 底部样式
footer {
  li {
    color: #999;
    padding: 0 15px;
    position: relative;
    cursor: pointer;
    &:hover {
      color: $xtxColor;
    }
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 12%; // 从25%的位置开始
      bottom: 12%; // 到75%的位置结束
      width: 0.5px;
      background-color: #e4e4e4;
    }
    &:last-child::after {
      display: none;
    }
  }
}
</style>
