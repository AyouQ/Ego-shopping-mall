import express from 'express';  
import cors from 'cors';
const app = express();  
import bodyParser from 'body-parser';  
import router from './router.js';  
  
app.use(cors());  
  
// 使用 bodyParser 中间件来解析 JSON 和 URL 编码的表单数据  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));  
  
// 挂载 router 到 /api 路径下  
app.use("/api", router);  
  
app.listen(8000, () => {  
    console.log('服务器启动成功 8000');  
});