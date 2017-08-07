// 如何获取请求的参数

// 响应里有什么
// 响应行， 协议名 状态码 原因短语 状态描述（提示浏览器作用）
// 响应头  content-type
// 响应体

// content-type
// 在请求头中表示请求体中的内容类型
// 在响应头中表示相应体的内容类型
// 请求里面有什么
//         请求行 GET/USER HTTP/
//         请求头 content-type:application/json
//         请求体 只有post系请求才有请求体

let express=require('express');
let app=express();
let url=require('url');
// 这里的路径值得是路径名（pathname）
// 访问的url路径只要路径名字能匹配上就可以 查询字符串不参与匹配
app.get('/user',function (req, res) {
    //请求的方法名
    console.log(req.method);
    // url=路径名（pathnam）+？传参（查询字符串）（查询参数）
    console.log(req.url);
    let urlobj=url.parse(req.url,true) ;//使用url模块可以解析转化Url字符串
    // true意味着查询参数变成对象，否则保留字符串
    // console.log(urlobj.pathname);//路径名
    // console.log(urlobj.query);//查询对象
    console.log(req.path);//urlobj.pathname
    console.log(req.query);//urlobj.query
    // http模块把请求头封装成了一个对象
    console.log(req.headers); //请求头对象
    console.log(req.headers.host);//取请求头中的主机名
    // 告诉客户端浏览器用什么编码来进行解析读取
    // 默认的是
    // 写入响应头
    res.setHeader('content-type','text/html;charset=utf-8');
    // 写入响应体
    res.end('用户')

});
// id路劲参数user/1
// 查询参数在？后面user?id=1
// 如果这个参数是可选的，可有可无的一般放到？后面
// 如果说这个参数是必填的，没有参数这个参数请求就没有意义，则一般放在路径里面
// 菜名就是必填的 要放在路劲里
// 比如说几成熟 就是可选的参数
// 我要向服务器查看某个用户的信息

app.get('/users/:id',function (req,res) {
    console.log(req.params.id);//路劲参数对象
    let id=req.params.id;
    console.log(req.query);
    res.end(id)
});
app.listen(8080);
// 中间件其实就是中间环节，他能决定 你这个琴秋是否能继续访问，也可以直接结束访问
