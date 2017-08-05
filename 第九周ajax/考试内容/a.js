var http=require('http'),fs=require('fs'),url=require('url'),server=http.createServer(function (req, res) {
    var objurl=url.parse(req.url,true)
    var pathname=objurl['pathname']
    var query=objurl['query']
    var reg=/\.(JSON|ICO|JS|HTML|CSS)/i
    if(reg.test(pathname)){
        var fixx=reg.exec(pathname)[1].toUpperCase()
        var fiXX='text/plain'
        switch (fixx){
            case 'JSON':
                fiXX='application/json';break;
            case 'ICO':fiXX='application/octet-stream';break;
            case 'JS':fiXX='text/javascript';break;
            case 'HTML':fiXX='text/html';break;
            case 'CSS':fiXX='text/css';break;
        }
        try{
            var a=fs.readFileSync('.'+pathname,'utf-8')
            res.writeHead(200,{'content-type':fiXX+';charset=utf-8'})
            res.end(a)
        }catch(e){
            res.writeHead(404,{'content-type':'text/plain;charset=utf-8'})
            res.end('报错')
        }
    }
        var newurl='./json/custom.json';
        var con=fs.readFileSync(newurl,'utf-8')
    con=JSON.parse(con)
    var aja={
            code:1,
        mss:'',
        data:null
    }
    if(pathname==='/getlist'){
            if(con.length>0){
                aja={
                    code:0,
                    mse:'获取成功',
                    data:con
                }
                res.writeHead(200,{"content-type":'application/json;charset=utf-8'})
                res.end(JSON.stringify(aja))
                return
            }
    }

    if(pathname=='/getinfo'){
        var newid=query['id']
        for(var i=0;i<con.length;i++){
            if(con[i]['id']==newid){
                aja={
                    code:1,
                    mse:'成功',
                    data:con[i]
                };
                break
            }
            res.writeHead(200,{"content-type":'application/json;charset=utf-8'});
            res.end(JSON.stringify(aja))
            return
        }
    }


    if(pathname=='/removeinfo'){
        var newid=query['id']
        aja={
            code:0,
            mse:'删除失败'
        }
        for(var i=0;i<con.length;i++){
            if(con[i]['id']==newid){
                con.splice(i,1)
                aja={
                    code:0,
                    mse:'删除成功'
                }
                break
            }

        }
        fs.writeFileSync(newurl,JSON.stringify(con),'utf-8')
        res.writeHead(200,{'content-type':'application/json;charset=utf-8'})
        res.end(JSON.stringify(aja))
        return

    }

    if(pathname=='/addinfo'){
        var str=''
        res.on('data',function (a) {
            str+=a
        })
        res.on('end',function () {
            aja={
                code:0,
                mse:'增加失败'
            }
            if(str.length>0){

                str.id=parseFloat(con[con.length-1]['id'])+1
               var data= JSON.stringify(str)
                con.push(data)
                fs.writeFileSync(newurl,JSON.stringify(con),'utf-8')
                aja={
                    code:0,
                    mse:'增加成功'
                }
            }
            res.writeHead(200,{"content-type":'application/json;charset=utf-8'})
            res.end(aja)
            return
        })
    }
    if(pathname=='/updatainfo') {
        var str = ''
        aja = {
            code: 0,
            mse: '修改失败'
        }
        res.on('data', function (a) {
            str += a
        })
        res.on('end', function () {
            if (str.length > 0) {
               for(var i=0;i<con.length;i++){
                  if( str['id']==con[i]['id']){
                      con[i]=str;
                      aja = {
                          code: 0,
                          mse: '修改成功'
                      }
                  }
               }
            }
            fs.writeFileSync(newurl,JSON.stringify(con),'utf-8')
            res.writeHead(200,{"content-type":'application/json;charset=utf-8'})
            res.end(aja)
        })

    }

})

server.listen(88,function () {
    console.log('监听成功');
})