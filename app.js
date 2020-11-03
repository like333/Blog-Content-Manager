const express = require('express')
const home = require('./route/home')
const admin = require('./route/admin')

const app = express()

// 为理由匹配路径
app.use('/home',home)
app.use('/admin',admin)

const server = app.listen(80,()=>{
    console.log('网站服务器启动成功，请访问localhost')
})