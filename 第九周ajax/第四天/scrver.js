var http =require("http");
var fs =require("fs");
var url =require("url");
var server=http.createServer(function (req, res) {
//当请求对应的端口号执行这个函数
var urlobj=url.parse(req.url,true);
    // url.parse()参数有true，在方法的返回值里面额query属性值是url这个地址？后面的值当成键值对存储到query中,不加true是字符串 加true是对象
    var pathname=urlobj["pathname"];
    var query=urlobj["query"] ;   // 如果是true{query:{username:12,parssword:192}}
    // 不加true的"username=12&parssword=192"
    console.log(urlobj);
    // if(pathname==="/index.html"){
    //     // 读取index。html里面的内容
    //     var content=fs.readFileSync("./index.html","utf-8");
    //     res.end(content);
    //     return
    // }
    // if(pathname==="/index.css"){
    //     var con=fs.readFileSync("./index.css","utf-8");
    //     res.end(con);
    //     return
    // }
    // if(pathname==="/index.js"){
    //     var cont=fs.readFileSync("./index.js","utf-8");
    //     res.end(cont);
    //     return
    // }
    var reg=/\.(HTML|JS|CSS|JSON|ICO)i/;
    if(reg.test(pathname)){
        var suffix=reg.exec(pathname)[1].toUpperCase();//转换成大写
        var suffixMIME="test/plain";
        switch (suffix){
            case "HTML":
            suffixMIME="text/html";
            break;
            case "CSS":
                suffixMIME="text/css";
                break;
            case "JS":
                suffixMIME="text/javascript";
                break;
            case "JSON":
                suffixMIME="application/json";
                break;
            case "ICO":
                suffixMIME="application/octet-stream";
                break;
        }
    }
try{
    var conFile=fs.readFileSync("."+pathname,"utf-8");
    // 设置响应头
    res.writeHead(200,{'content-type': suffixMIME+';charset=utf-8'});
    res.end(conFile)
}catch(e){
        res.writeHead(404,{'content-type':'text/plain:charset=utf-8'});
    res.end('request file is not found')
}
});


server.listen(82,function () {
    //监听成功执行当前函数
    console.log("当前80端口已经监听成功");
});
//MIME 类型
// 每一个文件都有自己的标识类型，比如：html文件 MIME类型是"text/html"
// css文件MIME类型是"test/css"
// 浏览器会按照代码的MIME类型进行渲染