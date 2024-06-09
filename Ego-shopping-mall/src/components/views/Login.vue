<template>
    <div class="login">
        <el-card style="max-width: 580px">
            <template #header>
            <div class="card-header">
                <span>Ego商城后台管理系统</span>
            </div>
            </template>
                <el-tabs v-model="currentIndex" class="demo-tabs" stretch @tab-change="handleTabClick">
                    <el-tab-pane label="登录" name="login">
                         <el-form :model="loginForm" status-icon ref="loginForm" :rules="rules"> 
                            <el-form-item label="用户名" label-width="70px" prop="username">
                                <el-input  type="text" v-model="loginForm.username"/>
                            </el-form-item>
                            <el-form-item label="密码" label-width="70px" prop="password">
                                <el-input  type="password" show-password v-model="loginForm.password"/>
                            </el-form-item>
                            <div style="display:flex; justify-content: center;" class="submit" name="login">
                                    <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                            </div>
                        </el-form>
                    </el-tab-pane>

                    <el-tab-pane label="注册" name="register">
                        <el-form :model="registerForm" status-icon ref="registerForm" :rules="rules"> 
                            <el-form-item label="用户名" label-width="70px" prop="username">
                                <el-input  type="text" v-model="registerForm.username"/>
                            </el-form-item>
                            <el-form-item label="密码" label-width="70px" prop="password">
                                <el-input  type="password" show-password v-model="registerForm.password"/>
                            </el-form-item>
                            <el-form-item label="确认密码" label-width="70px" prop="confirmPassword">
                                <el-input  type="password" show-password v-model="registerForm.confirmPassword"/>
                            </el-form-item>
                            <el-form-item label="邮箱" label-width="70px" prop="email">
                                <el-input  type="text"  v-model="registerForm.email"/>
                            </el-form-item>
                            <div style="display:flex; justify-content: center;" class="submit" name="register">
                                    <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
                            </div>
                        </el-form>
                    </el-tab-pane>
                </el-tabs>
        </el-card>
   </div>
</template>

<script >
export default {
    data(){
        //验证函数
        var validateUserName = (rule, value, callback) => {
            if(value === '') {
                callback(new Error('请输入用户名'));
            }
            else if(value.length <= 3) {
                callback(new Error('用户名不能少于4个字符'));
            }
            else{
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if(value === '') {
                callback(new Error('请输入密码'));
            }
            else{
                callback();
            }
        }
        var validateConfirmPass = (rule, value, callback) => {
            if(value === '') {
                callback(new Error('请输入确认密码'));
            }
            else if(value!== this.registerForm.password) {
                callback(new Error('两次密码不一致'));
            }
            else{
                callback();
            }
        }
        return {
            currentIndex:'login',
            loginForm:{
                username:'',
                password:''
            },
            registerForm:{
                username:'',
                password:'',
                confirmPassword:'',
                email:'',
            },
            activeTab:'login',
            rules:{
                username:[
                    {
                        validator:validateUserName,
                        trigger:'blur'
                    }
                ],
                password:[
                    {
                        validator:validatePass,
                        trigger:'blur'
                    }
                ],
                confirmPassword:[
                    {
                        validator:validateConfirmPass,
                        trigger:'blur'
                    }
                ]
            }
        }
    },
    methods:{
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if(this.activeTab === 'login'){
                        console.log(this.loginForm);
                    }
                    else if(this.activeTab ==='register'){
                        console.log(this.registerForm);
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        handleTabClick(tab){
            this.activeTab = tab
            // console.log(this.activeTab)
        }
        
    }
}
</script>

<style >
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 200px auto;
        .card-header {
            width: 500px;
            text-align: center
        }
    }

</style>