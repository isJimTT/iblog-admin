<template>
  <div class="header-info">
    <div class="operation">
      <span>
        <el-icon><bell /></el-icon>
      </span>
      <span>
        <el-icon><ChatDotRound /></el-icon>
      </span>
      <span>
        <span class="dot"></span>
        <el-icon><Postcard /></el-icon>
      </span>
    </div>
    <div class="info">
      <el-dropdown>
        <span class="user-info">
          <el-avatar
            :size="30"
            class="avatar"
            src="https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=040632a0bf1bb0518f71bb2c034af682/9e3df8dcd100baa1606079394b10b912c9fc2ee7.jpg"
          />
          <span class="name">jimtt</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon><CircleCloseFilled /></el-icon>
              退出系统
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              个人信息
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Unlock /></el-icon>
              修改密码
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts" name="header-info">
import { useRouter } from 'vue-router'
</script>

<style scoped lang="less">
.header-info {
  display: flex;
  align-items: center;
}

.operation {
  display: inline-flex;
  margin-right: 20px;
  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;

    &:hover {
      background: #f2f2f2;
    }

    i {
      font-size: 20px;
    }

    .dot {
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 10;
      width: 6px;
      height: 6px;
      background: red;
      border-radius: 100%;
    }
  }
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;

  .name {
    margin-left: 8px;
  }
}

.info {
  :global(.el-dropdown-menu__item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }
}
</style>
