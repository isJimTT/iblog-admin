<template>
  <div class="list-content">
    <div class="list-top">
      <div>
        <el-button type="primary" @click="handleAdd">添加文章</el-button>
      </div>
      <div class="list-search">
        <span style="font-size: 14px">发布状态：</span>
        <el-select v-model="state" placeholder="未发布" clearable>
          <el-option label="未发布" value="1" />
          <el-option label="已发布" value="0" />
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
        width="250"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column label="封面" header-align="center" width="100">
        <template #default="scope">
          <el-image style="width: 100px; height: 100px" :src="scope.row.cover" />
        </template>
      </el-table-column>
      <el-table-column prop="summary" label="简介" class="summary" width="350"></el-table-column>
      <el-table-column prop="category" label="分类" width="150"></el-table-column>
      <el-table-column prop="tags" label="标签" width="150"> </el-table-column>
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
      <el-table-column prop="cteat_time" label="创建时间" width="200">
        <template #default="scope">
          <span>{{ formatTime(scope) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button v-if="!scope.row.state" size="small" type="success">上架</el-button>
          <el-button v-else size="small" type="danger">下架</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row.article_id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="list-pagination">
      <el-pagination
        background
        @update:current-page="onChangeCurPage"
        :page-size="8"
        :current-page="currentPage"
        :total="totalArticle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getArticleListApi, deleteArticleApi } from '@/api/article'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
let tableData = ref(null)
const state = ref('')
const searchText = ref('')
const currentPage = ref(1)
const totalArticle = ref(0)

const getArticleList = async () => {
  try {
    const { code, data, total } = await getArticleListApi(state.value, currentPage.value, 8)
    if (code === 200) {
      tableData.value = data
      totalArticle.value = total
    }
  } catch (err) {
    console.log(err)
  }
}

const handleAdd = () => {
  router.push('/article/edit')
}

const handleSearch = () => {
  getArticleList()
}

const onChangeCurPage = (page) => {
  currentPage.value = page
  getArticleList()
}

const handleDelete = async (articleId) => {
  try {
    console.log(articleId)
    const { code } = await deleteArticleApi(articleId)
    if (code === 200) {
      ElNotification.success({
        title: '删除成功',
        message: '文章已删除',
        offset: 100
      })
      getArticleList()
    }
  } catch (err) {
    console.log(err)
  }
}

const formatTime = (data) => {
  return new Date(data.row.cteat_time).toLocaleString()
}

onMounted(() => {
  getArticleList()
})
</script>

<style scoped lang="less">
.list-content {
  width: 98.5%;
  margin: 15px auto;
  background-color: #fff;
  ::v-deep .el-table td.el-table__cell div {
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 控制最多显示的行数 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
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
