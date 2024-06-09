import express from  'express';
const router=express.Router();
import sqlclient from './config.js';


// 注册
router.post('/register',(req,res)=>{
    //  res.send('Welcome')
    //  console.log('成功处理register');
    // console.log('req.bodu',req.body);
    const{username,password,email}=req.body;
    const sql='insert into users values(?,?,?)';
    const arr=[username,password,email];
    // const arr=['yang','123123','123@gmail.com'];
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
    // const arr=[username,password];
    const arr=['yang','123123']
    sqlclient(sql,arr,(result)=>{
        if(result.length>0){
            res.send({
                code:200,
                msg:"登录成功",
                result
            })
        }else{
            res.send({
                code:500,
                msg:"登录失败",
                result
            })
        }
    })
})
 export default router;