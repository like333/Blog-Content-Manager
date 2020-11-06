// 管理页路由
const express = require('express')
const admin = express.Router()

// 请求登录页
admin.get('/login',require('./admin/loginPage'))

// 登录
admin.post('/login',require('./admin/login'))

// 请求用户列表页
admin.get('/user',require('./admin/userPage'))

// 退出
admin.get('/logout',require('./admin/logout'))

// 请求新增用户页面
admin.get('/user-edit',require('./admin/user-add-page'))

// 添加新用户
admin.post('/user-edit',require('./admin/user-add'))

module.exports = admin