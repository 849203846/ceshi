let express=require('express');
let app=express();
app.get('/clock',function (req, res) {
    // 新时间本地时间
    // 此服务器允许所有的来源来访问此接口
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send(new Date().toLocaleString())
});
app.listen(8080);
