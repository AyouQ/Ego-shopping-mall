import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'  
import Router from './router/router.js'
import './router/permission.js'
import './assets/css/common.css'
import  './api/index'
import store from "./store";
import './utils/init'
const app = createApp(App)  


app.use(store)
app.use(ElementPlus)
app.use(Router)
app.mount('#app')
