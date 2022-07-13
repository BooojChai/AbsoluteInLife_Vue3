import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

import "./assets/iconfont/iconfont.css"

import router from './router'
import ScrollTo from './plugin/scrollTo'
import MobileAdapter from './plugin/mobileAdapter'

const app = createApp(App)

app.use(router)
app.use(ScrollTo)
app.use(MobileAdapter)

app.mount('#app')
