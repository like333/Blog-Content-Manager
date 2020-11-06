// 请求user页
module.exports = (req,res) => {
    res.render('admin/user',{
        msg:req.session.username 
    })
}