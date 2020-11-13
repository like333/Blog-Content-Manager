const { Article } = require('../../model/article')
const P = require('mongoose-sex-page')

module.exports = async (req, res) => {
    const curPage = req.query.page || 1;
    req.app.locals.currentLink = 'article'

    let articles1 = await Article.find().populate('author')
    
    const authors = []
    for(let item of articles1){
        authors.push(item.author.username)
    }

    let articles = await P(Article).find().page(curPage).size(2).display(3).exec()
    
    res.render('admin/article',{
        articles:articles,
        author:authors
    })
}

