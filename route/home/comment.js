const {Comment} = require('../../model/comment')
const {Article} = require('../../model/article')

module.exports =async (req,res) =>{
   const {aid,uid} = req.query
   const commentContent = req.body.comment

   await Comment.create({
        aid:aid,
        uid:uid,
        time:Date.now(),
        content:commentContent
    })
    res.redirect(`/home/article?id=${aid}`)
}