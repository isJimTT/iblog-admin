<template>
  <div>
    <div class="mx-4 shadow">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        mode="mode"
        @onCreated="handleCreated"
        @onChange="handleChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, defineEmits } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { IDomEditor } from '@wangeditor/editor'

const mode = 'simple'
const editorRef = shallowRef() // 编辑器实例，必须用 shallowRef
const valueHtml = ref('') // 内容 HTML

const toolbarConfig = {}
const editorConfig = {
  placeholder: '请输入文章内容...',
  MENU_CONF: {
    uploadImage: {
      // mock地址
      server: '',
      // 小于该值就插入 base64 格式（而不上传），默认为 0
      base64LimitSize: 20 * 1024 // 20kb
    }
  }
}

const emit = defineEmits(['sendContent'])

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const handleChange = (editor: IDomEditor) => {
  // console.log(editor.getHtml())
  emit('sendContent', editor.getHtml())
}
</script>
