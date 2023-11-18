<template>
  <div class="header-crumbs">
    <el-breadcrumb separator="/">
      <template v-for="(item, index) in breadcrumbs" :key="index">
        <el-breadcrumb-item :to="item.path" class="crumb">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts" name="header-crumbs">
import { watch, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'

const breadcrumbs = computed(() => {
  const route = useRoute()
  return [{ path: route.path, name: route.name }]
})
</script>

<style scoped lang="less">
::v-deep .el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #fff;
  background-color: #0a60bd;
  padding: 10px 20px;
  border-radius: 20px;
}
</style>
