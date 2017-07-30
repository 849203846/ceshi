let fs=require('fs');
let http=require('http');

let server=http.createServer((req,res)=>{
// 根据不同的路径返回不同的结果  --路由

    // req.url 请求路径
    // req.headers  获取请求头
    // req.method 请求方法  浏览器默认是get  所有的请求方法都是大写的




if(req.url==='/'){
    res.setHeader('Content-type','text/html;charset=utf-8');
    fs.createReadStream('./index.html').pipe(res)
}else if(req.url==='/index.css'){
    res.setHeader('Content-type','text/css;charset=utf-8');
    fs.createReadStream('./index.css').pipe(res)
}else if(req.url==='/index.js'){
    res.setHeader('Content-type','application/javascript;charset=utf-8');
    fs.createReadStream('./index.js').pipe(res)
}else{//当服务器没有此文件时候 404
    res.statusCode=404;
    res.end()
}


});
let port=3001;
server.listen(port,function () {
    console.log(`start ${port}`);
});


// 自动重启node  会监控代码的改动 自动重启 nodemon
// >npm install nodemon -g
// nodemon 文件名














