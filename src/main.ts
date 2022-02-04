import { createApp } from 'vue'
import App from '@/App.vue'

import 'uno.css'
import '@/styles/vuetify.scss'

const app = createApp(App)
Object.values(import.meta.globEager('./plugins/*.ts')).map(i => i.install?.(app))
app.mount('#app')
