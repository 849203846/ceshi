
let express=require('express');
let router=express.Router();
// 定义一个路由 当客户端访问、路劲的时候执行对应的回调函数
router.get('/',function (req,res) {

let username=req.cookies.username
let success=req.cookies.success


    res.render('index',{username,success})
});
module.exports=router;