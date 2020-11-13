const mongoose = require('mongoose');
const { User } = require('./user');

const articleSchema = new mongoose.Schema({
    title:{
        type:String,
        minlength:2,
        maxlength:20,
        required:[true,'请填写文章标题']
    },
    publishedDate:{
        type:Date,
        default:Date.now()
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'请传递作者']
    },
    cover:{
        type:String,
        default:null
    },
    content:{
        type:String,
        required:true,
    },
})

const Article = mongoose.model('Article',articleSchema);

// Article.create({
//     title:'',
//     publishDate:'',
//     author:'',
//     cover:'',
//     content:''
// })

module.exports = {
    Article
}