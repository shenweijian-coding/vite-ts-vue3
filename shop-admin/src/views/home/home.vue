<template>
  <div>
    首页
    <!-- <el-button type="primary">点击</el-button> -->
  </div>
</template>
<script lang="ts" setup>
import { getUserInfo } from '@/api/user'
import { onMounted, ref } from 'vue'
import type { ILoginInfo } from '@/api/types/user'

const logo = ref<ILoginInfo['login_logo']>('')

onMounted(() => {
  getUserInfo().then(res => {
    console.log(res)
    logo.value = res.login_logo
  })
})
</script>
