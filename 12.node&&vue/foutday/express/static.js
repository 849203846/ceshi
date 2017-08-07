let express = require('express');
let app = express();
//静态文件中间件
let path=require('path');
let fs=require('fs');
function static(dirname) {
//返回一个中间件函数
return function (req, res, next) {
let filename=path.join(dirname,req.path);
    console.log(filename);
    let index=filename.lastIndexOf('\\')
    // if(filename.slice(index).indexOf('.')!=-1){
    //
    // }
    if(filename.slice(index).indexOf('.')!=-1){
        // 判断此路径是否存在
    let exists=fs.existsSync(filename);
    // 如果存在则从硬盘里读出并返回
    if(exists){
        fs.createReadStream(filename).pipe(res)
    }else{
        next()
    }
}else{
    }
}
}

app.use(static(path.resolve('public')));
app.get('/',function (req, res) {
    res.sendFile('./public/index.html',{root:__dirname})
})
app.listen(8080);
