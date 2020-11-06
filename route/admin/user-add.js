// user-add新增用户 post
const bcrypt = require('bcrypt')
const {User, userValidete} = require('../../model/user');
const e = require('express');


async function addSuccess(req, res,next) {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        next(JSON.stringify({path:'/admin/user-edit',msg:'邮箱地址已经被占用'}))
    } else {
        const newUser = req.body

        const salt = await bcrypt.genSalt(10);
        const newPwd = await bcrypt.hash(req.body.password, salt)
        newUser.password = newPwd

        await User.create(newUser)
        res.redirect('/admin/user')
    }
}

module.exports = async (req, res, next) => {
    try {
        await userValidete(req.body)
    }
    catch (err) {
       next(JSON.stringify({path:'/admin/user-edit',msg:err.message}))
    }
    addSuccess(req, res, next);
}