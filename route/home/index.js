const {Article} = require('../../model/article')
const P = require('mongoose-sex-page')

module.exports = async (req,res) => {
    const curPage = req.query.page;
    let resu = await Article.find().populate('author')
    
    let author = []
    for(let item of resu){
        author.push(item.author.username)
    }
    
    let result = await P(Article).page(curPage).size(4).display(5).find().exec()
    res.render('home/default.art',{
        result:result,
        author:author
    })
}
