
function createApplication() {


function app(req,res) {
for(let i=0;i<app.stack.length;i++){
    let route=app.stack[i];
    if(req.method==route.method&&req.url==route.path){
        router.callback(req,res);
      return
    }
}
res.end('CANNOT'+req.method+""+req.url)
    }
    //用来存放路由规则
    app.stack=[];
// 向路由规则数组中存放路由规则
    app.get=function (path, callback) {
        app.stack.push({method: 'GET',path,callback});}
        // 监听端口
        app.listen=function (port) {
            require('http').createServer(app).listen(port)}





    return app
}
module.export=createApplication

