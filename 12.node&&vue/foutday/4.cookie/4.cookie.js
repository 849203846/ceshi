
let express=require('express')
// 中间件是用来解析cookie的 他会向req添加一个cookies的属性
let cookieParser=require('cookie-parser')
let app=express()
// 执行了此中间件之后
app.use(cookieParser())
/** 1.浪费流量
 *  path是规定再次向那个路径发送请求的时候才会发送此cookie
 */
app.get('/write',function (req, res) {

   res.cookie('name','zfpx',{
   //    path:'/read',//规定了 发cookie、的时机和范围
    expires:new Date(Date.now()+10*1000), //设置过期时间
    maxAge:10*1000,
    httpOnly:true //只能http访问
   });
    res.send('ok')
})

app.get('/read',function (req, res) {
    // req.headers.cookie =>
    res.json(req.cookies)
})

app.get('/read2',function (req, res) {
    // req.headers.cookie =>
    res.json(req.cookies)
})
app.listen(8080)





