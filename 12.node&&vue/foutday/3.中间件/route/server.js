// 路由中间件
// 设计原则
// 开闭原则 对修改关闭 对扩展开放
let express = require('express');
let soup=require('./soup');
let noodles=require('./noodles');
//引入路由中间件
let app = express();
// 写中间件的时候一定结束响应或者调用next
app.use('/soup',soup);
app.use('/noodles',noodles);
    // 使用中间件的时候可以指定两个参数 第一个参数是路劲
    // app做判断的时候 会判断请求的路径是否以/soup开头 如果是的话 会执行第二个路由中间件
app.listen(8080);
