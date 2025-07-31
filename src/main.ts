import '@/assets/main.css'
import 'animate.css'

import { createApp, readonly } from 'vue'
import App from './App'
import { createToast, type IToast } from './funcs/create-toast'

const app = createApp(App)
const toast: IToast = createToast()
app.provide<IToast>('toast', readonly(toast))

app.mount('#app')
