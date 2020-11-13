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
admin.post('/user-add',require('./admin/user-add'))
// 修改用户
admin.post('/user-edit',require('./admin/user-edit'))
//删除用户
admin.get('/delete',require('./admin/user-del'))

//文章列表
admin.get('/article',require('./admin/article'))

// 文章编辑页
admin.get('/article-edit',require('./admin/article-edit-page'))
// 文章添加页面
admin.get('/article-add',require('./admin/article-edit-page'))
// 文章发布
admin.post('/article-add',require('./admin/article-add'))

module.exports = admin