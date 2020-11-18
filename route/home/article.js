const { Article } = require('../../model/article')
const { Comment } = require('../../model/comment')
module.exports =async (req,res) => {

    let result =await Article.findOne({_id:req.query.id})
    let result1 = await Article.findOne({_id:req.query.id}).populate('author')
    let author = result1.author.username


    let comments = await Comment.find({aid:req.query.id})
    let comments1 = await Comment.find({aid:req.query.id}).populate('uid')
    let commentinfo = []
    for (let item of comments1){
        commentinfo.push({username:item.uid.username,email:item.uid.email})
    }
    // let comments = await Comment.find()
    res.render('home/article',{
        result:result,
        author:author,
        comments:comments,
        commentinfo:commentinfo
    })
}