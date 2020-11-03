// 创建用户集合
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    name: { type:String, reauired:true, minlength:2, maxlength:18 },
    email: { type:String, required:true, unique:true },
    password: { type:String, required:true },
    // admin 超级管理员，normal 普通管理员
    role: { type:String, required:true }, 
    // 0 启用状态
    state: { type:String, required:true, default:'0' }
})
const User = mongoose.model('User',userSchema);
/*
User.create({
    name:'YuYan',
    email:'genius@yuyan.com',
    password:'genius',
    role:'admin',
    state:'0'
})
.then(() => {
    console.log('用户创建成功')
})
.catch(() => {
    console.log('用户创建失败')
})
*/
module.exports = {
    User
}