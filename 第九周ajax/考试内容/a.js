let http=require('http'),url=require('url'),fs=require('fs'),server=http.createServer(function (req, rep) {
    let objurl=url.parse(req.url,true),pathname=objurl['pathname'],query=objurl['query'],reg=/\.(JSON|ICO|CSS|JS|HTML)/i;
    if(reg.test(pathname)){
        let fixx=reg.exec(pathname)[1].toUpperCase(),fixxMINE='text/plain';
        switch (fixx){
            case 'JSON':
                fixxMINE='application/json';
                break;
            case 'ICO':
                fixxMINE='application/octet-stream';
                break;
            case 'CSS':
                fixxMINE='text/css';
                break;
            case 'JS':
                fixxMINE='text/javascript';
                break;
            case 'HTML':
                fixxMINE='text/html';
                break;
        }
        try {
            let q=fs.readFileSync('.'+pathname,'utf-8');
            rep.writeHead(200,{'content-type':fixxMINE+';charset=utf-8'});
            rep.end(q)
        }catch (e){
            rep.writeHead(404,{'content-type':'text/plain;charset=utf-8'});
            rep.end('严重警告 28')
        }
    }
    let newurl='./custom.json';
    let con=fs.readFileSync(newurl,'utf-8');
    con=JOSN.parse(con);
    let ajaxfh={
        code:1,
        mse:'',
        data:null
    };

    if(pathname==='getlinear'){
        if(con.length>0){
            ajaxfh={
                code:0,mse:'获取成功',data:con
            };
        }

        rep.writeHead(200,{'content-type':'application/json;charset=utf-8'});
        rep.end(JOSN.stringify(ajaxfh));
        return;
    }
    if(pathname==='getinfo'){
        let newid=query['id'];
        for(let i=0;i<con.length;i++){
            if(con[i]['id']===newid){
                ajaxfh={
                    code:0,mse:'获取成功',data:con[i]
                };
                break;
            }
        }
        rep.writeHead(200,{'content-type':'application/json;charset=utf-8'});
        rep.end(JOSN.stringify(ajaxfh));
        return;
    }
    if(pathname==='removeinfo'){
        ajaxfh={
            code:0,mse:'删除失败'};
        let newid=query['id'];
        for(let i=0;i<con.length;i++){
            if(con[i]['id']===newid){
                con.splice(i,1);
                ajaxfh={
                    code:0,mse:'删除成功',data:con[i]
                };
                fs.writeFileSync(newurl,JSON.stringify(con),'utf-8');
                break;
            }
        }
        rep.writeHead(200,{'content-type':'application/json;charset=utf-8'});
        rep.end(JOSN.stringify(ajaxfh));
        return;
    }

    if(pathname==='addinfo'){
        ajaxfh={
            code:0,mse:'新增失败'
        };
        let str='';
        req.on('data',function (a) {
            str+=a;
        });
        req.on('end',function () {
            if(str.length>0){
                let data=JSON.parse(str);
                data['id']=con.length===0?1:parseFloat(con[con.length-1]['id']+1);
                con.push(data);
                fs.writeFileSync(newurl,JSON.stringify(con),'utf-8');
                ajaxfh={
                    code:0,mse:'新增成功'
                };
            }
        });
        rep.writeHead(200,{'content-type':'application/json;charset=utf-8'});
        rep.end(JOSN.stringify(ajaxfh));
        return;
    }


    if(pathname==='updatainfo'){
        ajaxfh={
            code:0,mse:'修改失败'
        };
        let str='';
        req.on('data',function (a) {
            str+=a;
        });
        req.on('end',function () {
            if(str.length>0){
                let data=JSON.parse(str);
                for(let i=0;i<con.length;i++){
                    if(con[i]['id']===data['id']){
                        con[i]=data;
                        fs.writeFileSync(newurl,JSON.stringify(data),'utf-8');
                        ajaxfh={
                            code:0,mse:'修改成功'
                        };
                    }
                }
            }
        });
        rep.writeHead(200,{'content-type':'application/json;charset=utf-8'});
        rep.end(JOSN.stringify(ajaxfh));
    }
});

server.listen(81,function () {
    console.log('监听成功');
});