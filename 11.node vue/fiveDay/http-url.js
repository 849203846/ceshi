let http=require('http');
let fs=require('fs');
let  mime=require('mime');
http.createServer(function (req, res) {
    let pathname=req.url ; //req。url是包括问号后面的 我们想取的是问号后面的包括/ 问号前面的
   if(pathname==='/'){
        res.setHeader('Content-type','text/html;charset=utf8');
       fs.createReadStream('index.html').pipe(res)
   }else{
       fs.exists('.'+pathname,function (flag) {
           if(flag){//mime.lookup(pathname)自动匹配后缀名
               res.setHeader('Content-type',mime.lookup(pathname)+';charset=utf8');
               fs.createReadStream('.'+pathname).pipe(res)
           }else{
               res.statusCode=404;
               res.end()
           }
       })
   }
}).listen(8080,function () {});
// 第三方模块实现类型转化  mime --save 提供了线程的利用类型