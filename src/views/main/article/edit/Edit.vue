<template>
  <div class="list-content">
    <el-form
      ref="ruleFormRef"
      :model="editForm"
      :rules="editRule"
      label-width="120px"
      status-icon
      class="list-form"
    >
      <div style="flex: 70%">
        <el-form-item label="文章标题：" prop="title">
          <el-input placeholder="请输入文章标题" v-model="editForm.title" />
        </el-form-item>

        <el-form-item label="分类：" prop="category">
          <el-select placeholder="请选择分类信息" v-model="editForm.category">
            <el-option label="html" value="html" />
            <el-option label="css" value="css" />
          </el-select>
        </el-form-item>

        <el-form-item label="标签：" prop="tags">
          <el-select placeholder="请选择对应的标签" v-model="editForm.tags">
            <el-option label="语义化" value="语义化" />
            <el-option label="新特性" value="新特性" />
          </el-select>
        </el-form-item>

        <el-form-item label="文章简介：" prop="summary">
          <el-input placeholder="请输入文章简介" type="textarea" v-model="editForm.summary" />
        </el-form-item>
      </div>

      <div style="flex: 30%">
        <el-form-item label="文章封面：" prop="cover" v-model="editForm.cover">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8001/file"
            :on-success="handleAvatarSuccess"
            name="jimImg"
            :show-file-list="false"
          >
            <img v-if="editForm.cover" :src="editForm.cover" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>

        <el-form-item label="置顶：" prop="top">
          <el-switch active-value="1" inactive-value="0" v-model="editForm.top" />
        </el-form-item>
      </div>
    </el-form>
    <TextEditor @send-content="getContent" style="height: 600px" />
    <div class="edit-bottom" @click="submit">
      <el-button type="primary" plain
        ><el-icon><Edit /></el-icon> <span>发布文章</span></el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import TextEditor from './TextEditor.vue'
import { ElNotification } from 'element-plus'
import type { FormRules, UploadProps } from 'element-plus'
import { addArticleApi } from '@/api/article'

interface IEditForm {
  title: string
  category: string
  summary: string
  tags: string
  cover: string
  top: string
  content: string
  state: string
}

const editForm = reactive<IEditForm>({
  title: '',
  category: '',
  summary: '',
  tags: '',
  cover: '',
  top: '',
  state: '0',
  content: ''
})

const editRule = reactive<FormRules>({
  title: [
    { required: true, message: '请输入文章标题', trigger: 'blur' },
    { min: 3, max: 15, message: '文章标题至少3个字, 不可超过15字', trigger: 'blur' }
  ],
  category: [
    { required: true, message: '请选择文章分类', trigger: 'blur' },
    { min: 3, max: 15, message: '文章标题不可超过15字', trigger: 'blur' }
  ],
  summary: [
    { required: true, message: '请输入文章简介', trigger: 'blur' },
    { min: 3, max: 15, message: '文章标题不可超过15字', trigger: 'blur' }
  ],
  tags: [
    { required: true, message: '请选择文章标签', trigger: 'blur' },
    { min: 3, max: 15, message: '文章标题不可超过15字', trigger: 'blur' }
  ]
})

const handleAvatarSuccess: UploadProps['onSuccess'] = (response) => {
  if (response.code === 200) {
    editForm.cover = response.data.imgUrl
    ElNotification.success({
      title: 'Success',
      message: '上传成功',
      offset: 100
    })
  } else {
    ElNotification.error({
      title: 'Error',
      message: '上传失败',
      offset: 100
    })
  }
}

const getContent = (content) => {
  editForm.content = content
}

const submit = async () => {
  try {
    const { code, data } = await addArticleApi(editForm)
    if (code === 200) {
      ElNotification.success({
        title: '发布成功！',
        message: '文章已自动发布',
        offset: 100
      })
    }
  } catch (err) {
    console.log(err)
  }
}
</script>

<style scoped lang="less">
.list-content {
  width: 98.5%;
  margin: 15px auto;
  background-color: #fff;
  .list-form {
    display: flex;
    margin-top: 20px;
  }
  .avatar {
    width: 150px;
    height: 150px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }

  .avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
  }

  .el-icon.avatar-uploader-icon {
    border: 1px dashed var(--el-border-color);
    background-color: #eee;
    font-size: 28px;
    color: #8c939d;
    width: 150px;
    height: 150px;
    text-align: center;
    border-radius: 6px;
  }
  .edit-bottom {
    display: flex;
    justify-content: center;
    padding: 5px;
  }
}
</style>
