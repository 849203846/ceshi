let express = require('express');
// 使用express的router 的方法生成路由中间件的实例
let router = express.Router(); //miniapp
// 此处的路径是完整的url路径去掉前缀的路径
// /soup/eieght
router.get('/eight',function (req,res) {
    res.send('八宝粥') //send会自动处理编码
});
router.get('/egg',function (req, res) {
    res.send('皮蛋瘦肉粥')
});
module.exports=router;