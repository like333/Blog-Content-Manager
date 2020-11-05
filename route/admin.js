// 管理页路由
const express = require('express')
const {User} = require('../model/user')
const bcrypt = require('bcrypt');
const admin = express.Router()
admin.get('/login',(req,res) => {
    res.render('admin/login')
})

admin.post('/login',async (req,res) => {
//   res.send(req.body)
    let { email, password} = req.body
    if(email === "" || password === "")
        return res.status(400).render('admin/error',{msg:'用户名或密码出错'})
    // 根据邮箱地址查询用户列表
    let user = await User.findOne({email})

    function loginSuccess(){
        req.session.username = user.username
        req.app.locals.userInfo = user
        res.redirect('/admin/user')
    }
    function error(errorMsg){
        res.status(400).render('admin/error.art',{msg:errorMsg})
    }
    
    if(user){
        let isVaild = await bcrypt.compare(password,user.password);
        if(isVaild){
            loginSuccess()
        }else{
            error('密码错误')
       }
    }else{
        error('邮箱地址错误')
    }  
})

admin.get('/user',(req,res) => {
    res.render('admin/user',{
        msg:req.session.username 
    })
})
module.exports = admin