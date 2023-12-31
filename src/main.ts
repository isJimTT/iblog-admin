import { createApp } from 'vue'
import router from './router'
import store from './store'
import 'normalize.css'

import './assets/css/index.less'
import App from './App.vue'

const app = createApp(App)

// 全局注册elment-ui
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store)
app.use(router)
app.mount('#app')
