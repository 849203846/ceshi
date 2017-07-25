var http=require('http'),fs=require('fs'),url=require('url'),server=http.createServer(function (req, res) {
    var objurl=url.parse(req.url,true);
    var pathname=objurl['pathname'];
    var query=objurl['query'];
    var reg=/\.(JSON|ICO|JS|HTML|CSS)/i;
    if(reg.test(pathname)){
        var fixx=reg.exec(pathname)[1].toUpperCase();
        var fiXX='text/plain';
        switch (fixx){
            case 'JSON':
                fiXX='application/json';break;
            case 'ICO':fiXX='application/octet-stream';break;
            case 'JS':fiXX='text/javascript';break;
            case 'HTML':fiXX='text/html';break;
            case 'CSS':fiXX='text/css';break;
        }
        try{
            var a=fs.readFileSync('.'+pathname,'utf-8');
            res.writeHead(200,{'content-type':fiXX+';charset=utf-8'});
            res.end(a)
        }catch(e){
            res.writeHead(404,{'content-type':'text/plain;charset=utf-8'});
            res.end('报错')
        }
    }
        var newurl='./custom.json';
        var con=fs.readFileSync(newurl,'utf-8');
    con=JSON.parse(con);
    var aja={
            code:1,
        msg:'',
        data:null
    }
    if(pathname==='/getList'){
            if(con.length>0){
                aja={
                    code:0,
                    msg:'获取成功',
                    data:con
                }

            }
            res.writeHead(200,{"content-type":'application/json;charset=utf-8'})
        res.end(JSON.stringify(aja))
        return
    }

    if(pathname==='/getInfo'){
        var newid=query['id'];
        for(var i=0;i<con.length;i++){
            if(con[i]['id']==newid){
                aja={
                    code:0,
                    msg:'成功',
                    data:con[i]
                };
                break
            }

        }
        res.writeHead(200,{"content-type":'application/json;charset=utf-8'});
        res.end(JSON.stringify(aja));
        return

    }


    if(pathname==='/removeInfo'){
        var newid=query['id']
        aja={
            msg:'删除失败'
        }
        for(var i=0;i<con.length;i++){
            if(con[i]['id']==newid){
                con.splice(i,1)
                aja={
                    code:0,
                    msg:'删除成功'
                }
                break
            }

        }
        fs.writeFileSync(newurl,JSON.stringify(con),'utf-8')
        res.writeHead(200,{'content-type':'application/json;charset=utf-8'})
        res.end(JSON.stringify(aja))
        return

    }


    if(pathname === "/addInfo"){
        var str = "";
        req.on("data",function (chunk) {
            str += chunk;
        });
        req.on("end",function () {
            if(str.length === 0){
                res.writeHead(200,{"content-type":"application/json;charset=utf-8;"})
                res.end(JSON.stringify({
                    code : 1,
                    msg:"新增失败"
                }));
                return;
            }
            var data = JSON.parse(str);
            data["id"]  =con.length===0?1: parseFloat(con[con.length-1]["id"])+1;
            con.push(data);
            fs.writeFileSync(newurl,JSON.stringify(con),"utf-8");
            res.writeHead(200,{"content-type":"application/json;charset=utf-8;"});
            res.end(JSON.stringify({
                code:0,
                msg : "新增成功"
            }));
        });
        return;
    }

    if(pathname === "/updateInfo"){
        var str = "";
        req.on("data",function (chunk) {
            str+=chunk;
        });
        req.on("end",function () {
            var data = JSON.parse(str);
            for(var i=0;i<con.length;i++){
                if(con[i]["id"] == data["id"]){
                    con[i] = data;
                    fs.writeFileSync(newurl,JSON.stringify(con),"utf-8");
                    aja = {
                        code : 0,
                        msg: "修改成功"
                    };
                    break;
                }
            }
            res.writeHead(200,{"content-type":"application/json;charset=utf-8;"});
            res.end(JSON.stringify(aja));
        });
    }

});

server.listen(81,function () {
    console.log('监听成功');
});