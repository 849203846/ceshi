/**
 * Created by lirui on 17/7/12.
 */
//导入常用的三个模块
var http=require("http"),
    fs=require("fs"),
    url=require("url");
//http.createServer(): 创建一个服务,变量server就是我们创建出来的那个服务
var server=http.createServer(function (request,response) {
    //当客户端向服务器这个端口号发送一个请求,并且当前的服务已经成功接收到这个请求后会执行这个函数
    // request(请求):存放的是客户端请求的信息,包含客户端访问服务器url,问号传参的方式
    // request.url:存放的客户端请求文件资源的目录以及传给服务器的参数和数据
    // response(响应):服务器响应给客户端的信息
    console.log(request);
});
//监听当前的服务
server.listen(88,function () {
    //80:端口号
    //回调函数执行:当服务创建成功并且端口号也监听成功后执行这个回调函数
    console.log("server is success");
});
//http://localhost:63342/2017年第五期CSS学习/3、JS正式课/9、第九周/2、第二天/index.html?_ijt=ctsoemro9grqobao1kim5qk9cp
// localhost:本地
// 端口号
// 当前资源文件的路径
// ?_ijt=ctsoemro9grqobao1kim5qk9cp :为了不走缓存