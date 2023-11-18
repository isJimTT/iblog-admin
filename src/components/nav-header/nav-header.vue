<template>
  <div class="nav-header">
    <div class="menu-icon">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <header-crumb />
      <header-info />
    </div>
  </div>
</template>

<script setup lang="ts" name="nav-header">
import { ref } from 'vue'
import HeaderInfo from './c-cpns/header-info.vue'
import HeaderCrumb from './c-cpns/header-crumb.vue'

const isFold = ref(false)
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #fff;
  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
