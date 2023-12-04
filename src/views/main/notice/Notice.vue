<template>
  <div class="list-content">
    <div class="list-top">
      <div>
        <el-button type="primary" @click="handleAdd">添加公告</el-button>
      </div>
    </div>

    <el-table :data="tableData" style="width: 100%" max-height="80vh">
      <el-table-column
        prop="notice_id"
        label="公告编号"
        width="100"
        header-align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column prop="content" label="公告内容" header-align="center"> </el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="scope">
          <el-button size="small" type="danger" @click="handleDelete(scope.row.notice_id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="添加公告" width="30%">
      <span>公告内容：</span>
      <el-input v-model="noticeInput"></el-input>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click=";(dialogVisible = false), (noticeInput = '')">取消</el-button>
          <el-button type="primary" @click="addNotice"> 添加 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getNoticeListApi, addNoticeApi, deleteNoticeApi } from '@/api/notice'
import { ElNotification } from 'element-plus'
let tableData = ref(null)
const dialogVisible = ref(false)
const noticeInput = ref('')

const getArticleList = async () => {
  try {
    const { code, data } = await getNoticeListApi()
    if (code === 200) {
      tableData.value = data
    }
  } catch (err) {
    console.log(err)
  }
}

const addNotice = async () => {
  dialogVisible.value = false
  try {
    const { code } = await addNoticeApi({
      content: noticeInput.value
    })
    if (code === 200) {
      ElNotification.success({
        title: 'Success',
        message: '添加成功',
        offset: 100
      })
      getArticleList()
      noticeInput.value = ''
    }
  } catch (err) {
    console.log(err)
  }
}

const handleDelete = async (noticeId) => {
  try {
    const { code } = await deleteNoticeApi(noticeId)
    if (code === 200) {
      ElNotification.success({
        title: 'Success',
        message: '删除成功',
        offset: 100
      })
      getArticleList()
    }
  } catch (err) {
    console.log(err)
  }
}

const handleAdd = () => {
  dialogVisible.value = true
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
