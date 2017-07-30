let fs=require('fs');
let http=require('http');

let server=http.createServer((req,res)=>{

    res.setHeader('Content-type','text/html;charset=utf-8');

    fs.createReadStream('./index.html').pipe(res) //pipe rs.pipe(ws)


    // let result=fs.readFile('./index.html',function (err,data) {
    //     if(err)return console.log(err)
    //     res.end(result)
    // })



    // let result=fs.readFileSync('./index.html')
    // res.end(result)

});

let port=3001;
server.listen(port,function () {
    console.log(`start ${port}`);
});


// 自动重启node  会监控代码的改动 自动重启 nodemon
// >npm install nodemon -g
// 缺点














