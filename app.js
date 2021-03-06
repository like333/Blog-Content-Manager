const express = require('express')
const home = require('./route/home')
const admin = require('./route/admin')
const path  =require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const { format } = require('path')
const template = require('art-template')
const dateFormat = require('dateformat')
const morgan = require('morgan')
const config = require('config')

//创建服务器
const app = express()

if(process.env.NODE_ENV === "pro"){
  console.log('当前环境是生产环境')

}else if(process.env.NODE_ENV === "dev"){
  console.log('当前环境是开发环境')
  app.use(morgan('dev'))
}
//为模板引擎配置日期处理方法
template.defaults.imports.dateFormat = dateFormat

// 数据库链接
require('./model/connect')



// 拦截所有请求添加session方法
app.use(session({
  secret:'secret key',
  resave:false,
  saveUninitialized:false,
  cookie:{
    maxAge:24 * 60 * 60 * 1000
  }
}))

// 拦截所有请求处理post请求参数，添加req.body
app.use(bodyParser.urlencoded({extended:false}))

//开放静态资源文件
app.use(express.static(__dirname + '/public'))

// 配置使用的模板引擎
app.engine('art',require('express-art-template'))
// 配置模板路径
app.set('views',path.join(__dirname,'views'))
// 配置默认模板后缀
app.set('view engine','art')

// 拦截请求判断用户登录状态
app.use('/admin',require('./middleware/loginGuard'))


// 为路由匹配路径
app.use('/home',home)
app.use('/admin',admin)

// 错误处理中间件
app.use( ( err, req, res, next) => {
     // 重定向回某个页面,将错误信息添加到地址栏参数中
     if(typeof err === String){
      const result = JSON.parse(err)
      let params = []
      for(let attr in result){
        if(attr !== 'path'){
            params.push(attr + "=" + result[attr])
        }
      }
      return res.redirect(`${result.path}?${params.join('&')}`)
     }else{
       res.send(err)
     }
    
})

const server = app.listen(80,()=>{
    console.log('网站服务器启动成功，请访问localhost',server.address().port)
})