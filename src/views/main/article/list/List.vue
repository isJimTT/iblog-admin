<template>
  <div class="list-content">
    <div class="list-top">
      <div>
        <el-button type="primary" @click="handleAdd">添加文章</el-button>
      </div>
      <div class="list-search">
        <span style="font-size: 14px">发布状态：</span>
        <el-select v-model="queryParams.state" placeholder="未发布" clearable>
          <el-option label="未发布" value="0" />
          <el-option label="已发布" value="1" />
        </el-select>

        <el-input
          v-model="searchText"
          placeholder="请输入搜索内容"
          clearable
          @clear="handleSearch"
          style="width: 200px; margin-right: 10px; margin-left: 10px"
        ></el-input>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </div>
    </div>

    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" max-height="80vh">
      <el-table-column
        prop="title"
        label="文章标题"
        width="300"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column label="封面" header-align="center" width="100">
        <template #default="scope">
          <el-image style="width: 100px; height: 100px" :src="scope.row.cover" />
        </template>
      </el-table-column>
      <el-table-column prop="summary" label="简介" width="350"></el-table-column>
      <el-table-column prop="category" label="分类" width="150"></el-table-column>
      <el-table-column label="标签" width="150">
        <template #default="scope">
          <div v-for="item in scope.row.tags" :key="item">
            <button>
              {{ item }}
            </button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="置顶" width="130">
        <template #default="scope">
          <el-switch v-model="scope.row.top" inline-prompt />
        </template>
      </el-table-column>
      <el-table-column label="发布状态" width="130">
        <template #default="scope">
          <el-tag v-if="scope.row.state" type="success">已发布</el-tag>
          <el-tag v-else type="danger">未发布</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="time" label="创建时间" width="200"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
            >下架</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="list-pagination">
      <el-pagination background :page-size="5" :total="100" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const searchText = ref('')
const tableData = reactive([
  {
    title: 'html5语义化',
    cover: 'https://cos.yychuiyan.com/images/do3z134k3p40000.webp',
    summary: 'No. 189, Grove St, Los Angeles',
    category: 'html',
    tags: ['html5', '语义化'],
    top: 1,
    state: 1,
    time: '2023-11-10'
  },
  {
    title: 'html5语义化',
    cover: 'https://cos.yychuiyan.com/images/do3z134k3p40000.webp',
    summary: 'No. 189, Grove St, Los Angeles',
    category: 'html',
    tags: ['html5', '语义化'],
    top: 1,
    state: 1,
    time: '2023-11-10'
  },
  {
    title: 'html5语义化',
    cover: 'https://cos.yychuiyan.com/images/do3z134k3p40000.webp',
    summary: 'No. 189, Grove St, Los Angeles',
    category: 'html',
    tags: ['html5', '语义化'],
    top: 1,
    state: 1,
    time: '2023-11-10'
  },
  {
    title: 'html5语义化',
    cover: 'https://cos.yychuiyan.com/images/do3z134k3p40000.webp',
    summary: 'No. 189, Grove St, Los Angeles',
    category: 'html',
    tags: ['html5', '语义化'],
    top: 1,
    state: 1,
    time: '2023-11-10'
  },
  {
    title: 'html5语义化',
    cover: 'https://cos.yychuiyan.com/images/do3z134k3p40000.webp',
    summary: 'No. 189, Grove St, Los Angeles',
    category: 'html',
    tags: ['html5', '语义化'],
    top: 1,
    state: 1,
    time: '2023-11-10'
  },
  {
    title: 'html5语义化',
    cover: 'https://cos.yychuiyan.com/images/do3z134k3p40000.webp',
    summary: 'No. 189, Grove St, Los Angeles',
    category: 'html',
    tags: ['html5', '语义化'],
    top: 1,
    state: 1,
    time: '2023-11-10'
  },
  {
    title: 'html5语义化',
    cover: 'https://cos.yychuiyan.com/images/do3z134k3p40000.webp',
    summary: 'No. 189, Grove St, Los Angeles',
    category: 'html',
    tags: ['html5', '语义化'],
    top: 1,
    state: 1,
    time: '2023-11-10'
  },
  {
    title: 'html5语义化',
    cover: 'https://cos.yychuiyan.com/images/do3z134k3p40000.webp',
    summary: 'No. 189, Grove St, Los Angeles',
    category: 'html',
    tags: ['html5', '语义化'],
    top: 1,
    state: 1,
    time: '2023-11-10'
  }
])
const queryParams = reactive({
  state: null
})

const handleAdd = () => {
  console.log('新增')
}

const handleSearch = () => {
  console.log('搜索')
}

const handleDelete = (index, row) => {
  console.log('删除', index, row)
}
</script>

<style scoped lang="less">
.list-content {
  width: 98.5%;
  margin: 15px auto;
  background-color: #fff;
  .list-top {
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }
  .list-pagination {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
}
</style>
