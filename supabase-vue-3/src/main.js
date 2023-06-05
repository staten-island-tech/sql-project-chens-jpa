import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from 'C:\Users\Owner\OneDrive - NYCDOE\Documents\GitHub\sql-project-chens-jpa\supabase-vue-3\src\App.vue'
import router from './router/index.js'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')