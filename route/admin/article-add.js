// 添加文章。提交处理  /route/admin/article-add.js
const {Article} =  require('../../model/article')
const formidable = require('formidable')
const path = require('path')

const form = new formidable.IncomingForm();
form.uploadDir = path.join(__dirname,'../','../','public','uploads')
form.keepExtensions = true

module.exports = (req,res) => {
    form.parse(req,async (err, fields, files) => {
        if(err !== null){
            res.send(err.message)
            return
        }
        const  {title, publishedDate, content} = fields
        const filePath = files.cover.path.split('public')[1]
        const newArticle = {
            title:title,
            author:fields.author,
            publishedDate:publishedDate,
            cover:filePath,
            content:content,
        }
        await Article.create(newArticle)
        res.redirect('/admin/article')
    })
}