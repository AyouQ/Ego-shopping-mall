import { createRouter ,createWebHashHistory} from "vue-router";
// import Layout from "../components/views/Layout.vue";
import  Layout from '../views/Layout.vue'
import Home from '../views/main/HomePage/Home.vue';
import Params from "@/views/main/Params.vue";
import Products from "@/views/main/Products.vue";
import ADCategory from "@/views/main/ADCategory.vue";
import Login from '../views/Login.vue';
const router = createRouter({
    history: createWebHashHistory(), 
    routes: [
        {
            path: '',
            name: 'Layout',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: Home,
                    meta:{
                        isLogin:true
                    }
                },
                {
                    path: '/params',
                    name: 'Paramsmer',
                    component: Params,
                    meta:{
                        isLogin:true
                    }
                },
                {
                    path: '/products',
                    name: 'Products',
                    component: Products,
                    meta:{
                        isLogin:true
                    }
                },
                {
                    path:'ad',
                    name:'ADCategory',
                    component:ADCategory,
                    meta:{
                        isLogin:true
                    }
                }
            ]
        },
        {
            path:'/login',
            name:'Login',
            component:Login,
        }

    ]
});

export default router;