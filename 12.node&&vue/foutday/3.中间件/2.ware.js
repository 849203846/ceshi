// 1./users/add ?name=zfpx增加一个用户
// /users 查看所有的用户
// user/:id查看某一个id对应的用户


let status={
    404:'not defined',
    200:'ok'
}
let users=[];
 let express = require('express');
 let app = express();
 app.use(function (req, res, next) {
     res.setHeader('content-type','text/html;charset=utf-8');
     next()
 });
app.use(function (req, res, next) {
    // 我们可以自己写一个res.send方法
    // 中间件一个用途就是添加一些公用的方法 在路由函数里调用
res.send=function (body) {
    //把body转换成字符串
   let type=typeof body; //获取参数类型
    switch (type){
    case 'object': //是一个对象或者数组
        body=JSON.stringify(body);
        break;
        case 'number':
            // 设置响应头状态吗
            res.statusCode=body;
            body=status[body];
            break;
        default:
            break;
    }
    res.end(body);
    next()
}

});
 app.get('/users/add',function (req,res) {
     let name=req.query.name;
    // 先从查询菜熟中拿到name的值
     let user={name};
     user.id=users.length>0?users[users.length-1].id+1:1;
     // 拼出一个对象 给新添加的对象增加id属性
     users.push(user)
     res.end('1')
 });

app.get('/users',function (req,res) {
    // end只能接受字符串或者buffer 不能接受对象的其他类型
 // res.end(JSON.stringify(users))
 //    send可以接受任意类型的菜熟 包括对象或数组
    res.send(users)
});
app.get('/users/:id',function (req,res) {
   let id=req.params.id;
    // 先拿到路径传进来的id属性 获取对应的用户
    let user=users.find(item=>item.id==id);
    res.send(user)


});
 app.listen(8080);
