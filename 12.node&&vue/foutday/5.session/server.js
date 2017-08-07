let express = require('express');
let session=require('express-session');
let app = express();
// 使用完此中间接后 会在请求对象上 也就是req上多元一个session属性
app.use(session({
    resave:true,//重新保存 每次客户端访问服务器的时候都会重新保存session
    saveUninitialized:true,//不管客户端用不用这个session 都分配一份给他
    secret:'zfpx' //密钥 用它给cookie加密的

}));
app.get('/write',function (req, res) {
    req.session.name='zfpx';
    res.send('ok')
});
app.get('/read',function (req, res) {
    res.send(req.session.name)
});
app.listen(8080);
