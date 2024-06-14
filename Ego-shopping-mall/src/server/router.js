import express from  'express';
const router=express.Router();
import sqlclient from './config.js';
import jwt from 'jsonwebtoken';


router.get('/getmsg', (req, res) => {
    res.send('Welcome')
});
// 注册
router.post('/register',(req,res)=>{
    const{username,password,email}=req.body;
    const sql='insert into users values(?,?,?)';
    const arr=[username,password,email];
    sqlclient(sql,arr,(result)=>{
        if(result.affectedRows>0){
            res.send({
                code:200,
                msg:"注册成功",
                result,
                message:req.body
            })
        }else{
            res.send({
                code:500,
                msg:"注册失败",
                result,
                errors:result.affectedRows
            })
        }
    })
})
// 登录
router.post('/login',(req,res)=>{
    const{username,password}=req.body;
    const sql='select * from users where name=? and password=?';
    const arr=[username,password];
    console.log(req.body);
    sqlclient(sql,arr,(result)=>{
        if(result.length>0){
            let token=jwt.sign({
                username,
                password
            },'somekeys')

            res.send({
                code:200,
                token,
                username,
            })
        }else{
            res.send({
                code:401,
                msg:"登录失败",
            })
        }
    })
})
 export default router;