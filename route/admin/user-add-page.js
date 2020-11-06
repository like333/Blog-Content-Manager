// 请求新增用户页
module.exports = (req, res) => {
    res.render('admin/user-edit',{
        errorMsg:req.query.msg
    })
}