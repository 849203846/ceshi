//如何使用模版
// 当渲染数据时候需要用模版
// 模版一般是一个静态文件
let express=require('express');
let path=require('path');
let app=express();
// 模版配置
// 设置模版引擎
app.set('view engine','ejs'); //告诉express 模版的类型
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
