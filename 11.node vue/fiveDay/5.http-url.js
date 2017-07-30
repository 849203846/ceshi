

let http=require('http');
let fs=require('fs');
let  mime=require('mime')
let url=require('url') //专门处理url的

http.createServer(function (req, res) {
 let {pathname,query}=url.parse(req.url,true);
    console.log(pathname,query);
    if(pathname==='/'){
        res.setHeader('Content-type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res)
    }else if(pathname==='/clock'){
        let time=new Date();
        res.end(time.toLocaleString())

    }else{
        fs.exists('.'+pathname,function (flag) {
            if(flag){//mime.lookup(pathname)自动匹配后缀名
                res.setHeader('Content-type',mime.lookup(pathname)+';charset=utf-8');
                fs.createReadStream('.'+pathname).pipe(res)

            }else{
                res.statusCode=404;
                res.end()
            }
        })
    }

}).listen(8080,function () {
    console.log('成功');
})
