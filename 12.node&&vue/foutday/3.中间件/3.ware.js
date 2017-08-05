// 1.如果有多中间件怎么办
// 如果中间件里发生错误怎么处理
let express = require('express');
let app = express();
app.use(function (req, res, next) {
    //在所有的中间件里和所有的鲁豫哦里请求对象和响应对象是同一个对象
    req.money=100
    next()

})
app.use(function (req, res, next) {
    req.money-=20
    next()

})
app.use(function (req, res, next) {
    req.money-=40
    next('钱丢了')

})
app.use(function (req, res, next) {
    req.money-=40
    // 如果中间件里面出错，会跳过后面所有的中间件和路由，交给错误处理中间件吃力
    next()

})
app.use(function (err, req, res, next) {
    console.log(err);
    res.send('wrong')
})
app.get('/',function (req, res) {
    console.log('发放'+req.money)
  res.send('发放'+req.money)
})

app.listen(8080);
