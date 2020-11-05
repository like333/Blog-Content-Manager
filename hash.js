const bcrypt = require('bcrypt')

/**
 * 
 * @param {要进行加密的密码} pwd 
 */
async function hash(pwd){
    let salt = await bcrypt.genSalt(10)
    let hashPwd = await bcrypt.hash(pwd,salt)
    console.log(hashPwd) ;
}
/**
 * 
 * @param {用户输入密码} pwd 
 * @param {数据库中加密的密码} hashPwd 
 */
async function hashCompare(pwd,hashPwd){
    return await bcrypt.compare(pwd,hashPwd)
}

module.exports = {
    hash,
    hashCompare
}