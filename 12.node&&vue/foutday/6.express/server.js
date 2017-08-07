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
let cookieParser=require('cookie-parser')

let app=express();
// 基本所有的第三方中间件都会返回一个函数之心这个函数才能得到真正的中间件函数
// 请求体是什么类型 就用什么解析器来进行解析，不管输入的格式是urlencoded 还是json 输出的格式都是对象
app.use(bodyParser.urlencoded({extended:false}));
// extended如果等于true会使用qs false就是querystring
// 进过这个中间件处理之后 我们可以通过req.body得到请求体
// encoded是经过编码后的url地址
// json解析json的请求体的
// raw  原声
// text 文本
// express只有一个亲生的中间件 就是静态文件中间件
// 使用静态文件中间件 指定一个静态文件跟目录
app.use(express.static(path.resolve('../node_modules')));

app.use(cookieParser())
app.set('view engine','html');
app.set('views',path.resolve('views'));
// 指定html类型的模版渲染方法
app.engine('html',require('ejs').__express);
//   index提供首页的路由
 //执行后又返回一个新好熟 请求监听函数
app.use('/user',user);
app.use('/',index);
app.listen(8080);
