// 退出
module.exports = (req,res) => {
    //删除session
    req.session.destroy(() => {
        // 删除cookie
        res.clearCookie('connect.sid')
        res.redirect('/admin/login')
    })
    req.app.locals.userInfo = null
}