// 连接数据库
const mongoose = require('mongoose')
const config = require("config")

mongoose.set('useCreateIndex', true) 
//(mongodb://like:like@$localhost:27017/blog)
mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'))
