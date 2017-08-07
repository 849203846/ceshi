/**
 * GET /user/signup 获取注册表单
 * POST /user/signup 提交注册表单
 * GET /user/signin 获取登录表单
 * POST /user/signin 提交登录表单
 * GET / 首页
 * */
// 配置模版引擎

let path=require('path') ;
// 设置模版存放的根目录
let bodyParser=require('body-parser'); //请求体解析中间件nusername=1&password=2 转化为对象
let express=require('express');
let user=require('./routes/user');
let index=require('./routes/index');
let cookieParser=require('cookie-parser');
let session=require('express-session');
let app=express();
app.use(session({
    ressave:true,
    saveUninitialized:true,
    secret:'zfpx',
    cookie:{
        maxAge:10*1000
    }
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.resolve('../node_modules')));

app.use(cookieParser());
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.use('/user',user);
app.use('/',index);
app.listen(8080);
