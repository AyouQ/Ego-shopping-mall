import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 5000
})

//request 拦截器



export default request;