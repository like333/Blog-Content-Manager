const express = require('express')
const home = require('./route/home')
const admin = require('./route/admin')
const path  =require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

// 数据库链接
require('./model/connect')

//创建服务器
const app = express()

// 拦截所有请求添加session方法
app.use(session({secret:'secret key',resave:false,saveUninitialized:true}))

// 拦截所有请求处理post请求参数
app.use(bodyParser.urlencoded({extended:false}))

//开放静态资源文件
app.use(express.static(__dirname + '/public'))

// 配置使用的模板引擎
app.engine('art',require('express-art-template'))
// 配置模板路径
app.set('views',path.join(__dirname,'views'))
// 配置默认模板后缀
app.set('view engine','art')

// 拦截请求判断用户登录状态
app.use('/admin',(req,res,next) => {
    if(req.url !== '/login' && !req.session.username){
        res.redirect('/admin/login')
    }else{
        next()
    }
})


// 为路由匹配路径
app.use('/home',home)
app.use('/admin',admin)



const server = app.listen(80,()=>{
    console.log('网站服务器启动成功，请访问localhost',server.address().port)
})