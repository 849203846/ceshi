let express=require('express');

let app=express();
app.use(function (req,res,next) {
    //中间件所有的路由必须要走的
    // next是一个函数 执行他表示可以继续执行，如果不调用就终止在中间件里了
    console.log(`${req.path} ${req.method}`);
    res.setHeader('content-type','text/html;charset=utf8');
    // 调用表示继续执行 不调用表示停止
    next()
});
app.get('/order',function (req, res) {
    res.end('我的订单')
});
app.get('/dou',function (req, res) {
    res.end('我的金豆')
});

app.listen(3000);

// 中间件的用途
// 添加一些公用的逻辑 设置响应类型的编码
// 添加一些公用的方法
