import { createRouter ,createWebHashHistory} from "vue-router";
import Layout from "../components/views/Layout.vue";
import Home from '../components/views/main/Home.vue';
import Params from "@/components/views/main/Params.vue";
import Products from "@/components/views/main/Products.vue";
import ADCategory from "@/components/views/main/ADCategory.vue";
import test from '../components/test.vue';
const router = createRouter({
    history: createWebHashHistory(), 
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: Home,
                },
                {
                    path: '/params',
                    name: 'Paramsmer',
                    component: Params,
                },
                {
                    path: '/products',
                    name: 'Products',
                    component: Products,
                },
                {
                    path:'ad',
                    name:'ADCategory',
                    component:ADCategory,
                }
            ]
        },
        

    ]
});

export default router;