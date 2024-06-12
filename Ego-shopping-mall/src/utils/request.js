import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

//request 拦截器
//可以自请求发送前对请求做一些处理
//比如统一加token，对请求参数做处理
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'; // 设置请求头
    // do something before request is sent
    return config;
}, error => {
    // do something with request error
    return Promise.reject(error);
});

//response 拦截器
//可以在接口响应后统一处理结果
request.interceptors.response.use(
    response => {
        const res = response.data;
        //如果返回的是文件
        if (response.config.responseType === 'blob') {
            return res;
        }
        //兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            return JSON.parse(res);
        }
        // do something with response data
        return res;
    },
    error => {
        // do something with response error
        console.log('err' + error); // for debug
        return Promise.reject(error);
    }
);

export default request;