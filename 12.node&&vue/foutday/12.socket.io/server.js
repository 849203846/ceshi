// 编写一个socket.io应用
// socket.io+express联系起来用
let express=require('express');
let app=express();
let path =require('path');
let {Message}=require('./model');
app.use(express.static(path.resolve('../node_modules')));
app.get('/',function (req, res) {
   res.sendFile(path.resolve('index.html'))
});
// 创建一个http服务器 吧app作为请求监听的函数
let server=require('http').createServer(app);
// 引入socket。io服务器 执行他 传入http服务器的实例 返回一个io的实例
let io=require('socket.io')(server);
let sockets={};
// 这里记录了所有的用户名和他们的socket对应的关系}
io.on('connection',function (socket) {

    //监听客户端的连接成功事件
    let username;//设置一个变量 表示此客户端的用户名字 每个客户端都有自己的名字 所以应该是私有的变量
    let currentRoom;//当前房间
    socket.on('message',function (msg) {
        if(username){ //正常发言;
            let reg=/@([^\s]+) (.+)/;
            let result=msg.match(reg);
            if(result){
            // 如果为true匹配上了 就是私聊
                let toUser=result[1]; //想私聊对方的用户名
                let content=result[2];//对方的内容

                // 通过用户名找到对于法国的socket 然后发送消息
                let toSocket=sockets[toUser]
                if(toSocket){
                    toSocket.send({username,content,createAt:new Date().toLocaleString()})
                }
               else{
                    socket.send({username:'系统',content:'你私聊的人可能不存在',createAt:new Date().toLocaleString()})
                }
            }else{
                Message.create({username,content:msg},function (err, doc) {
                    if(currentRoom){
                        io.in(currentRoom).emit('message',doc)
           //如果此客户端在某个房间内 则向房间内进行广播 发消息 否则广播给所有的客户端
                    }else{
                        io.emit('message',doc)
                    }

                });
                //   广播 通知所有的客户端

            }
        }else{//没有设置过就是第一次发言
          username=msg;// 把消息当成用户名
            sockets[username]=socket;
            // 当客户端第一次来的时候 要广播一条欢迎消息
            io.emit('message',{username:'系统',content:`欢迎${username}加入笨聊天室`,createAt:new Date().toLocaleString()})
        }
        // 判断此客户端是第一次消息 还是不是第一次 如果是第一次则设置值用户名 如果不是第一次则使用用户名
        // 单个用ssocket
      // socket.send(msg)

    });
    socket.on('getAllMessages',function () {
        // 监听客户端发过来的要求获得所有的最近20条消息的事件
        Message.find({}).sort({createAt:-1}).limit(20).exec(function (err, messages) {
            messages.reverse();
                socket.emit('allMessages',messages)
        })
    });
    socket.on('join',function (roomName) {
        console.log(roomName);
        if(currentRoom) {
            socket.leave(currentRoom)
        }
        // 让此客户端加入某个房间
        socket.join(roomName);//让此客户端加入新房间
        currentRoom=roomName//把这个新房间赋给当前房间
        socket.emit('joined',roomName)
    })
    socket.on('revoke',function (id) {
        Message.remove({id},function () {
            io.emit('revoked',id)
        })
    })
});
server.listen(8080);
/**
 * 1. 实现匿名料亭
 * 绑定表单提交事件 在表单提交的时候 先得到文本框的值 然后发送给哄抬
 * 后台收到消息后 把此消息广播所有的客户端
 * 所有客户端收到消息后把消息添加到自己的 ul里
 * 当客户端第一次向服务器发送消息的时候 服务器会判断此客户端是否设置过用户 如果没有设置过 则把第一条消息当成用户名 如果设置过就当成普通消息
 */