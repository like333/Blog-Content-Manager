// 博客展示页面路由
const express = require('express')

const home = express.Router()

home.get('/',require('./home/index'))

home.get('/article',require('./home/article'))

home.post('/comment',require('./home/comment'))

module.exports = home