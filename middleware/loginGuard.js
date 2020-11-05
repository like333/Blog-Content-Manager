/**
     * 登录拦截
     * 请求地址是否为登录页，如果不是登录页
     * 判断是否已经登录，未登录重定向到登录页
     * 已登录，继续向下执行
     * 
*/
const guard = (req,res,next) => {
    
    if(req.url !== '/login' && !req.session.username){
        res.redirect('/admin/login')
    }else{
        next()
    }
}
module.exports = guard