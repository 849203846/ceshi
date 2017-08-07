let express=require('express');
let router=express.Router();
let users=[]
router.get('/signup',function (req, res) {
    // 第一个参数是模版的相对路径 相对于模版根目录的路径
    res.render('user/signup',{title:'用户注册'});

});
router.post('/signup',function (req, res) {

let user=req.body
    // 存放的所有的用户的信息
    users.push(user)
    res.redirect('/user/signin')//重新让客户端指向另外一个地址
   // console.log(user); //{username，password｝

});
router.get('/signin',function (req, res) {
    res.render('user/signin',{title:'用户登录'});

});
router.post('/signin',function (req, res) {
    // res.render   res.redirect 都会结束end
let user=req.body
let oldUser=users.find(item=>item.username===user.username&&item.password===user.password)
if(oldUser){
    res.redirect('/')
}else{
    res.redirect('back') //跳回上一页
}
});
module.exports=router;












