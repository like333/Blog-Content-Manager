const {User} = require('../../model/user');

// 请求新增用户页
module.exports = async (req, res) => {
    const {msg, id} = req.query
   if(id){
      
    const user = await User.findById(id)
    res.render('admin/user-edit',{
        errorMsg:msg,
        user:user,
        actionAddress:'/admin/user-edit?id=' + id,
        buttonValue:'修改'
    })
    }else{
        res.render('admin/user-edit',{
            errorMsg:msg,
            actionAddress:'/admin/user-add',
            buttonValue:'添加'
        })
   }
   
}