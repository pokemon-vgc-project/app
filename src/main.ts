import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import TheContainer from './components/ui/TheContainer.vue'

const pinia = createPinia()
const app = createApp(App)

app.component('TheContainer', TheContainer)

app.use(pinia)
app.use(router)

app.mount('#app')
