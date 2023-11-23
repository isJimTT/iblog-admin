<template>
  <div class="account">
    <el-form :model="account" label-width="60px" ref="formRef" :rules="accountRules">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts" name="account">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, FormInstance } from 'element-plus'
import { loginApi } from '@/api/login'
import { localToken } from '@/utils/token'
import { useRouter } from 'vue-router'

const account = reactive({
  name: '',
  password: ''
})
const formRef = ref<FormInstance>()
const router = useRouter()
const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入用户名~', trigger: 'blur' },
    { pattern: /^[a-z0-9]{5,20}$/, message: '必须是6~20个字母或数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '必须输入密码~', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '密码必须在3位以上', trigger: 'blur' }
  ]
}

async function loginAction() {
  formRef.value?.validate(async (isValid) => {
    if (!isValid) return ElMessage.warning({ message: '账号或者密码输入的规则错误~' })
    try {
      const { code, data } = await loginApi(account)
      if (code === 200) {
        localToken.setToken('token', data.token)
        router.push('/article/list')
        return ElMessage.success({ message: '登录成功~' })
      } else {
        return ElMessage.error({ message: '登录失败，请重试~' })
      }
    } catch (err) {
      console.log(err)
    }
  })
}

// 定义暴露的属性和方法
defineExpose({
  loginAction
})
</script>

<style scoped lang="less"></style>
