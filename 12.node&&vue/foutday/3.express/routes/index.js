
let express=require('express');
let router=express.Router();
// 定义一个路由 当客户端访问、路劲的时候执行对应的回调函数
router.get('/',function (req,res) {
    res.send('首页')
});
module.exports=router;