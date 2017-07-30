//搭建http服务
    let http=require('http');
//内置和兴http服务
let listener=(req,res)=>{ //请求的监听 请求到来时执行
// 只要访问了端口号就会执行当前函数
// res是一个可写流
    res.setHeader('Content-type','text/plain;charset=utf-8;')
res.write('hello')
    res.statusCode=202 //设置状态吗
    res.end('我很帅') //end后不能在write 只能运行字符串和buffer、 默认浏览器解析的是gbk


};
let server=http.createServer(listener);

let port=3000
server.listen(port,function () {
    //默认监听80  如果写80 不需要加端口号
    console.log(`start ${port}`);
})






















