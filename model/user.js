// 创建用户集合
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema ({
    username: { type:String, reauired:true, minlength:2, maxlength:18 },
    email: { type:String, required:true, unique:true },
    password: { type:String, required:true },
    // admin 超级管理员，normal 普通管理员
    role: { type:String, required:true }, 
    // 0 启用状态
    state: { type:String, required:true, default:'0' }
})
const User = mongoose.model('User',userSchema);


async function createUser(){
    const salt = await bcrypt.genSalt(10)
    const hashPwd = await bcrypt.hash('genius', salt)
    
    User.create({
        username:'YuYan',
        email:'genius@yuyan.com',
        password:hashPwd,
        role:'admin',
        state:'0'
    }).then(() => {
        console.log('用户创建成功')
    })
    .catch(() => {
        console.log('用户创建失败')
    })
}

// createUser();

module.exports = {
    User
}