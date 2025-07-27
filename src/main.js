import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import '@/styles/index.css'
import '@/styles/common.scss'
import pinia from './stores'
import { lazyPlugin } from '@/directives/directivePlugin'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)

app.mount('#app')
