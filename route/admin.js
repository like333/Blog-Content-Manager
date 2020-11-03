// 管理页路由
const express = require('express')

const admin = express.Router()
admin.get('/',(req,res) => {
    res.send('欢迎来到博客管理页')
})
module.exports = admin