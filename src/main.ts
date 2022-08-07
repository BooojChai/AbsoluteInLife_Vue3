import { createApp } from 'vue'
import App from './App.vue'

import "./assets/iconfont/iconfont.css"
import "./assets/iconfont-proj/iconfont.css"
import 'lib-flexible/flexible.js'

import router from './router'
import MobileAdapter from './plugin/mobileAdapter'

const app = createApp(App)

app.use(router)
app.use(MobileAdapter)

app.mount('#app')
