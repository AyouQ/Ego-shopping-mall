import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'  
import Router from './router/router.js'
import './router/permission.js'
import './assets/css/common.css'
import  './api/index'
const app = createApp(App)  

// Vue.prototype.request=request;
app.use(ElementPlus)
app.use(Router)
app.mount('#app')
