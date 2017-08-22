let Socket=require('ws');
let socket=new Socket('ws://localhost:8080');
// 当客户端连接上服务器连接成功 之后会调用此服务器
socket.on('open',function () {
    console.log('连接成功');
    socket.send('你好')
});
socket.on('message',function (msg) {
    console.log(msg);
});