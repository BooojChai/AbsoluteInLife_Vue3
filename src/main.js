import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

import "./assets/iconfont/iconfont.css"

import router from './router'
import ScrollTo from './plugin/scrollTo'

const app = createApp(App)

app.config.globalProperties.$eventbus = new mitt()

app.use(router)
app.use(ScrollTo)

app.mount('#app')
