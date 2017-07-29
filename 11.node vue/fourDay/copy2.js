let fs=require('fs');
// 默认我们不会修改highWaterMark
// 默认读取一次4b 写入1b
function copy(source, target) {
    // 先构建可读流和可写流
    let rs=fs.createReadStream(source,{highWaterMark:4});
    let ws=fs.createWriteStream(target,{highWaterMark:1});
    //1先读取一次 如果不能写入那 暂停
    //rs.on(data) ws.write==false rs.pause()
    rs.on('data',function (data) {
        if(ws.write(data)===false){
            rs.pause()
        }
ws.on("drain",function () {
    rs.resume();
    console.log('干了');
});
rs.on('end',function () {
    ws.end()
})
    })
    // 2.当嘴里的1个和地下的三个都吃完了 会触发一个事件 ws.on('drain)
    //3在dranin方法rs。resume（）回复读取
    // 4 当读取完毕后将文件关闭掉
}
copy('2.txt','4.txt');



