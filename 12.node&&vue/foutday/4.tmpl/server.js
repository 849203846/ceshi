//如何使用模版
// 当渲染数据时候需要用模版
// 模版一般是一个静态文件
let express=require('express');
let path=require('path');
let app=express();
// 模版配置
// 设置模版引擎
app.set('view engine','ejs'); //告诉express 模版的类型
// 使用html渲染模版引擎
// 1把view engine 改为html
// 2把模版的名字改成html
// 3.添加一行代码
// app.engine('html',require('ejs').__express);
// 指定模版存放的根目录
// path.resolve 从当期的路径触发 拼出绝对路径
app.set('views',path.resolve('views'));
let title='主页';
app.get('/',function (req, res) {
    // res.sendFile(path.join(__dirname,'./views/index.html'))//发送文件
    // res.sendFile('./views/index.html',{root:__dirname})
    //渲染 把一个静态的模版和一个动态的数据混合在一起
    // 第一个参数只能写模版的相对路径
    // 第二个参数是数据对象，
    // ejs的后缀可以省略,找模版的时候express会自动添加view engine后缀 去查找文件
    res.render('index.ejs',{title});
});
app.listen(8080);
// path must be absolute or specify root to res.sendFile 路径必须是一个绝对的或者指定一个根路径



let users=[
    {id:1,name:'zhufeng1'},
    {id:2,name:'zhufeng2'}
]
// 使用html渲染模版引擎
// 1把view engine 改为html
app.use(function (req,res,next) {
// 凡是所有的路由都需要的逻辑 全部都移到中间件里
    res.locals.name='名称';
    res.locals.title='珠峰培训';
    next()
})
app.set('view engine','html');
// 2把模版的名字改成html

app.get('/a',function (req, res) {
    // 其实真正渲染模版的数据对象并不是第二个参数 而是res,locals 为在  真正渲染之前express会把第二个参数数据对象的属性全部拷贝 或者覆盖掉res.locals上
    res.locals.name='名称';
    res.locals.title='珠峰培训';
    res.render('index.html',{title,users});
});
// 3.添加一行代码
app.engine('html',require('ejs').__express);
// 如果遇到的模版后缀是html的话，使用ejs的渲染方法来进行渲染

// 表达式 变量 函数调用 计算
// 表达式一定要有返回值

// 如果客户端访问过来的路径是以/public开头的话 会自动对应成public目录下面的文件自动返回给客户

// 当客户端访问静态文件的时候会自动去public目录下面找对应的文件
app.use(express.static('public'));

