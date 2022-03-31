import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Parallax from '../../../src/scroll-parallax-effect/vue'
import '@/assets/base.css'

const app = createApp(App)

app.use(router)
app.use(Parallax, { direction: 'x' })

app.mount('#app')
