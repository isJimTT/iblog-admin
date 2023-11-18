<template>
  <div class="main">
    <HeaderMenu />
    <div class="content">
      <NavHeader />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts" name="main">
import NavHeader from '@/components/nav-header/nav-header.vue'
import HeaderMenu from '@/components/nav-menu/nav-menu.vue'
</script>

<style scoped lang="less">
.main {
  display: flex;
  overflow: hidden;
  background-color: #f5f5f5;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
