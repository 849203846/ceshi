/**
 *
 *
 * 当客户端第一次访问的时候服务器返回 欢迎你第一次访问 第二次就是第二次访问
 *
 * 第一步 先获取客户端传过来的cookie
 *
 *
 */
let http=require('http')
let querystring=require('querystring')
http.createServer(function (req, res) {
    if(req.url==='/visit'){
        let flag=req.headers.cookie
        res.setHeader('content-type','text/html;charset=utf8')
if(flag){
    let cookieobj=querystring.parse(flag,'; ') ;//把字符串转成对象
    let visit=cookieobj.visit
    visit=isNaN(visit)?1:parseInt(visit)+1
    res.setHeader('set-cookie',`visit=${visit}`)
    res.end(`欢迎你的第${visit}次到来`)
}else{
    res.setHeader('set-cookie','visit=1')
    res.end('欢迎你的第一次访问')

}

    }else{
    res.end('404')
    }
    }
).listen(8080)











