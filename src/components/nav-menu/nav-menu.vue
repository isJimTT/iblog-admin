<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo" />
      <span class="title">积木踢踢</span>
    </div>
    <el-menu
      style="padding: 10px"
      active-text-color="#fff"
      background-color="#001529"
      class="el-menu-vertical-demo"
      default-active="/article/list"
      text-color="#fff"
      :router="true"
      :unique-opened="true"
    >
      <el-sub-menu index="admin">
        <template #title>
          <el-icon><Management /></el-icon>
          <span>文章管理</span>
        </template>
        <el-menu-item index="/article/list" @click="handleActiveItem('')"
          ><span style="margin-left: 10px">文章发布</span></el-menu-item
        >
        <el-menu-item index="/article/edit" @click="handleActiveItem('')"
          ><span style="margin-left: 10px"> 编辑文章</span></el-menu-item
        >
      </el-sub-menu>
      <el-menu-item
        index="/admin/user"
        @click="handleActiveItem('user')"
        :class="isActive === 'user' ? 'active' : ''"
      >
        <el-icon><Avatar /></el-icon>
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item
        index="/admin/comment"
        @click="handleActiveItem('comment')"
        :class="isActive === 'comment' ? 'active' : ''"
      >
        <el-icon><Comment /></el-icon>
        <span>评论管理</span>
      </el-menu-item>
      <el-menu-item
        index="/admin/notice"
        @click="handleActiveItem('notice')"
        :class="isActive === 'notice' ? 'active' : ''"
      >
        <el-icon><BellFilled /></el-icon>
        <span>公告管理</span>
      </el-menu-item>
      <el-menu-item
        index="/admin/coding"
        @click="handleActiveItem('coding')"
        :class="isActive === 'coding' ? 'active' : ''"
      >
        <el-icon><More /></el-icon>
        <span>其他</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts" name="nav-menu">
import { ref, Ref } from 'vue'

let isActive: Ref<string> = ref('')

const handleActiveItem = (path) => {
  isActive.value = path
}
</script>

<style scoped lang="less">
.active {
  background-color: #0a60bd;
}
.nav-menu {
  width: 300px;
  height: 100vh;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
