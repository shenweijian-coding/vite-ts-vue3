<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="aside">
        <AppMenu></AppMenu>
      </el-aside>
      <el-container>
        <el-header class="header"></el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import AppMenu from './components/AppMenu.vue'
</script>
<style lang="scss">
.el-container{
  height: 100vh;
}
.header{
  background-color: #fff;
}
.main{
  background-color: #f6f6f6;
}
</style>
