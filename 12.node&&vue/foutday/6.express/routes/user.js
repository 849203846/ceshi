let express=require('express');
let router=express.Router();

let users=[]
router.get('/signup',function (req, res) {
    let error=req.cookies.error
    // res.locals.error=error
    res.clearCookie('error')
    res.render('user/signup',{title:'用户注册',error});

});
router.post('/signup',function (req, res) {

let user=req.body

    let olduser=users.find(item=>item.username===user.username)
    if(olduser){
    res.cookie('error','此用户名已经被占用')
        res.redirect('back')//返回上一级
    }else {
        users.push(user)
        res.redirect('/user/signin')
    }

});
router.get('/signin',function (req, res) {
    let error=req.cookies.error
    res.clearCookie('error')
    res.render('user/signin',{title:'用户登录',error});
});
router.post('/signin',function (req, res) {
let user=req.body
let oldUser=users.find(item=>item.username===user.username&&item.password===user.password)
if(oldUser){
    res.cookie('username','user.username')
    res.cookie('success','恭喜你登录成功')
    res.redirect('/')
}else{
     res.cookie('error','你的用户名和密码输入不正确 请重新输入')
    res.redirect('back')
}
});
module.exports=router;












