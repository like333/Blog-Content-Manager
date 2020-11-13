// 博客展示页面路由
const express = require('express')

const home = express.Router()
home.get('/article',(req,res) => {
    res.render('admin/article.art')
})
module.exports = home