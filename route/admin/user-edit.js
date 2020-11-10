// user-eidt提交修改用户信息 post
const bcrypt = require('bcrypt')
const { User, userValidete } = require('../../model/user');


async function editSuccess(req, res, next) {
    const { username, email, password, role, state } = req.body
    const id = req.query.id
    let user = await User.findOne({ _id: id });

    const isUser = await User.findOne({ email: email })
    if (email !== user.email && isUser) {
        // 新邮箱已被占用
        next(JSON.stringify({ path: '/admin/user-edit', msg: `${email}邮箱已经被占用`, id: id }))

    }else{
        //新邮箱未被占用，校验密码是否正确
        const isValid = await bcrypt.compare(password, user.password)

        if (isValid) {
            // 密码正确，更新信息
            await User.updateOne({ _id: id }, {
                username: username,
                email: email,
                role: role,
                state: state
            })
            res.redirect('/admin/user')

        } else {
            // 密码输入有误
            next(JSON.stringify({ path: '/admin/user-edit', msg: '密码不正确', id: id }))
        }
    }
}




module.exports = async (req, res, next) => {
    try {
        await userValidete(req.body)
    }
    catch (err) {
        next(JSON.stringify({ path: '/admin/user-edit', msg: err.message }))
    }
    editSuccess(req, res, next);
}