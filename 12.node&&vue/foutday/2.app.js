let http=require('http')
// http属于内置模块
http.createServer(function (req,res) {
    // 当客户端请求服务器的时候 也就是说当服务器收到客户端请求的时候会执行请求的监听函数
    // require()
    // response


    // 路由 router
    // 服务器根据客户端琴秋的方法名字和路径不同返回不同的响应


    let method=req.method  //取得请求的方法名
    let url=req.url  //取得请求的url路径
    // http://localhost:3000/
    //  如果请求的方法是gei 并且返回的url地址是/的话
    if(method=='GET'&&url=='/'){
        res.end('home')  //home就是响应体
    }else if(method=='GET'&&url=='/user'){
        res.end('user')
    }else{
        res.end(`CANNOT ${method} ${url}`)
    }
// 1.所有的方法和路径全在一个函数里处理 代码臃肿而难以维护
//     2.如果要修改一个方法 有可能影响其他的逻辑，不方便重构
}).listen(3000);
