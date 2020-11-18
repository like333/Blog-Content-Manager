const { Article } = require('../../model/article')
module.exports =async (req,res) => {

    let result =await Article.findOne({_id:req.query.id})
let result1 = await Article.findOne({_id:req.query.id}).populate('author')
let author = result1.author.username
    // res.send(author)
    res.render('home/article',{
        result:result,
        author:author
    })
}