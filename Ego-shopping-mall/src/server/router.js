import express from  'express';
const router=express.Router();
import sqlclient from './config.js';
import jwt from 'jsonwebtoken';
import {getList} from './config.js'

router.get('/getmsg', (req, res) => {
    res.send('Welcome')
});

router.get('/gethotel',(req,res)=>{
    const sql='select * from commodity'
    getList(sql,'',ressult=>{
        if(ressult.length>0){
            res.send({
                code:200,
                msg:"查询成功",
                result:ressult
            })
        }
        else{
            console.log("查询错误")
            
        }
    })
})
router.get('/getlist',(req, res) => {
    const sql='select * from users';
    sqlclient(sql,'',(result)=>{
        res.send({
            code:200,
            msg:"查询成功",
            result,
        })
    })
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