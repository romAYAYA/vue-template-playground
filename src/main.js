import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'

import './assets/scss/main.scss'

createApp(App).use(routes).mount('#app')
