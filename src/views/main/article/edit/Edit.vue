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
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>

        <el-form-item label="标签：" prop="tags">
          <el-select placeholder="请选择对应的标签" v-model="editForm.tags">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
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
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :show-file-list="false"
          >
            <img v-if="0" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>

        <el-form-item label="置顶：" prop="top">
          <el-switch />
        </el-form-item>
      </div>
    </el-form>
    <TextEditor style="height: 600px" />
    <div class="edit-bottom">
      <el-button type="primary" plain
        ><el-icon><Edit /></el-icon> <span>发布文章</span></el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import TextEditor from './TextEditor.vue'
import type { FormInstance, FormRules } from 'element-plus'

interface IEditForm {
  title: string
  category: string
  summary: string
  tags: string
  cover: string
}

const editForm = reactive<IEditForm>({
  title: '',
  category: '',
  summary: '',
  tags: '',
  cover: ''
})

const editRule = reactive<FormRules>({
  title: [
    { required: true, message: '请输入文章标题', trigger: 'blur' },
    { min: 3, max: 15, message: '文章标题至少3个字，  不可超过15字', trigger: 'blur' }
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
