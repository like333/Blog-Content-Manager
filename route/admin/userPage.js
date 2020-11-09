// 请求user页
const {User} = require('../../model/user')

module.exports = async (req,res) => {

    let curPage = req.query.page || 1;
    let pageSize = 2
    let count =  await User.countDocuments({})
    let totalPage = Math.ceil(count / pageSize)
    let start = (curPage -1) * pageSize
    let users = await User.find({}).limit(pageSize).skip(start)
    res.render('admin/user',{
        users:users,
        curPage:curPage,
        totalPage:totalPage
    })
 
}