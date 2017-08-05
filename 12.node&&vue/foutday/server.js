let express=require('express');
// 如果写的是一个模块的名字的话，先找是不是核心模块 看是不是内置模块，会去当前目录的node——modules下面去找
// express 其实是一个函数方法
// 可以执行  会返回一个新的函数
let app=express();
// 如何定义路由
// get这个方法和app的请求方法是一一对应的 GET POST PUT DELETE OPTIONS
app.get('/',function (req, res) {
  res.end('home')
});
app.get('/user',function (req, res) {
    res.end('user')
})
// ap.all([]) 表示所有的方法 不管客户端提交过来的路径是什么全部能匹配上 *表示匹配所有的路径，不管客户端提交的路径是什么也能全部匹配
app.all('*',function (req,res) {
    res.end('404');//Not Found 你请求的资源没找到
})
// 监听这个端口
app.listen(8080)
// require('http').createServer(app).listen(8080)
// app的本质是一个请求监听函数


