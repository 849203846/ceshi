
let express=require('express')
// 中间件是用来解析cookie的 他会向req添加一个cookies的属性
let cookieParser=require('cookie-parser')
let app=express()
// 执行了此中间件之后
app.use(cookieParser())
app.get('/write',function (req, res) {

    // 这个是express提供的用来写cookie的方法
    let query=req.query
    for(let attr in query){
        res.cookie(attr,query[attr])
    }
    res.cookie('name','zfpx')
    res.send('ok')
})

app.get('/read',function (req, res) {
    // req.headers.cookie =>
res.json(req.cookies)
})

app.listen(8080)





