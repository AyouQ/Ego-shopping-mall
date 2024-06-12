import { createStore } from 'vuex';
import login from './modules/login.js'


export default new createStore({
    modules:{
        login,
    },
    
})