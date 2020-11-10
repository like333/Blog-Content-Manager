// 请求user页
const {User} = require('../../model/user')

module.exports = async (req,res) => {

    let curPage = req.query.page || 1;
    let pageSize = 10
    let count =  await User.countDocuments({})
    let totalPage = Math.ceil(count / pageSize)
    let start = (curPage -1) * pageSize
    //limit(每页查询条数) .skip(开始显示的位置)
    let users = await User.find({}).limit(pageSize).skip(start)
    res.render('admin/user',{
        users:users,
        curPage:curPage,
        totalPage:totalPage,
        count:count
    })
 
}