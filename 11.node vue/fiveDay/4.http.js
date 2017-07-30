let fs=require('fs');
let http=require('http');
let mime={'.js':"application/javascript",".css":'text/css'};
let server=http.createServer((req,res)=>{
   if(req.url==='/'){
       res.setHeader('Content-type','text/html;charset=utf-8');
       fs.createReadStream('./index.html').pipe(res)
   }else {
       fs.exists('.'+req.url,function (flag) {
           if(flag){
               res.setHeader('Content-type',mime[req.url.match(/\.\w+$/)[0]]+';charset=utf-8');
               fs.createReadStream('.'+req.url).pipe(res)
           }else{
               res.statusCode=404;
               res.end()
           }
       })//判断路径是否存在，如果存在返回true 不存在返回false

}
});
let port=3001;
server.listen(port,function () {
    console.log(`start ${port}`);
});











