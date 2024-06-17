import axios from "axios";
import request from "@/utils/request.js";
import base from "./base.js";


const api={
    register(pramas){
        return axios.post(base.baseURL+base.register,pramas);
    },
    Login(pramas){
        return axios.post(base.baseURL+base.login,pramas);
    },

    Msg(pramas={}){
        return request.get('getmsg',pramas);
    }
}
export default api;
