<template>
    <el-menu 
    :default-active="active"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    :ellipsis="false">
        <el-menu-item index='/'>
            首页
        </el-menu-item>
        <el-menu-item index='products'>
            商品管理
        </el-menu-item>
        <el-menu-item index='params'>
            规格参数
        </el-menu-item>
        <el-menu-item index='ad'>
            广告管理
        </el-menu-item>
        <el-menu-item class="user">
            <span class="user-name">{{username}}</span>
            <el-button @click="loginOut">退出</el-button>
        </el-menu-item>
        
    </el-menu>
</template>

<script >
import { computed } from 'vue';
import { mapMutations, mapState ,useStore} from 'vuex';
export default{
    data(){
        return {
            active:'/',
        }
    },
    computed:{
        /**
        *这里是直接使用全局函数响应式显示用户名
        */
        // ...mapState("login",['user'])
    },
    methods:{
         ...mapMutations('login',['setUser']),
        loginOut(){
            this.$router.push('/login')
            localStorage.removeItem('ego');
            this.setUser({})
        }
    },
    setup(){
        /**
        *假设你有一个 useStore 钩子来访问 store
        */
        const store=useStore();
        const username=computed(()=>store.state.login.user.username)
        return {
             // 返回需要在模板中使用的响应式引用或对象 
            username,
        }
    }
}
</script>

<style lang="scss" scoped>
.user{
    margin: auto;
    margin-right: 30px;
    .user-name{
    text-align: center;
    color: aqua;
    width: 60px;
    margin-right: 20px;
    border-radius: 50%;
    border: 1px solid #fff;
    }
}

</style>