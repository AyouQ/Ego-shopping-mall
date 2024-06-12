// import axios from "../utils/request.js";
import axios from "axios";
import base from "./base.js";


const api={
    register(pramas){
        return axios.post(base.baseURL+base.register,pramas);
    },
    Login(pramas){
        return axios.post(base.baseURL+base.login,pramas);
    },

    Msg(pramas={}){
        return axios.get('http://localhost:8000/api/getmsg',pramas);
    }
}
export default api;
