// 管理页路由
const express = require('express')
const admin = express.Router()

// 请求登录页
admin.get('/login',require('./admin/loginPage'))
// 登录
admin.post('/login',require('./admin/login'))
// 请求用户列表页
admin.get('/user',require('./admin/userPage'))

module.exports = admin