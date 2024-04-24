//import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle.js'
const app = createApp(App)

app.use(router)

app.mount('#app')
