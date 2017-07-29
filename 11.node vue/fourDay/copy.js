// // 读出source的内容再写入到target中
// fs=require('fs');
// function copySync(source,target) { //readFileSync  writeFileSync
//     let a=fs.readFileSync(source);
//     fs.writeFileSync(target,a)
//
// }
// function copy(source,target,callback) { //readFile writeFile
//     let aa=fs.readFile(source,function (err,data) {
//         if(err)return callback(err);
//         fs.writeFile(target,data, callback);
//
//     })
// }
//
//
// copySync('1.txt',"2.txt")
// copy('1.txt',"3.txt",function (err) {
//     console.log('2拷贝成功');
//    if(err) console.log(err);
// })

// 淹没可用内存，边读边写，而不是全部独到内存中，流


// 流 可读流 可写流

let fs=require('fs');
// 读取文件必须存在


let rs=fs.createReadStream('3.txt',{highWaterMark:1});//创建一个可读流  highWaterMark:1}每次读取限制为1b
let a=[];
// 默认叫非流动模式 -> 监听data事件-》流动模式
rs.on('data',function (data) {//会默认不停的发布data事件 会将数据传入到callback中
    console.log(data);//data是buffer类型的 将buffer拼接起来

rs.pause();  //读取一次就暂停 暂停的是data事件的触发
a.push(data)

// 默认会不停的触发ondata事件直到数据读完
});

setTimeout(function () {
    rs.resume() //恢复流的读取 继续开始data、事件的触发
},1000);
rs.on('end',function () {// 当读取完毕后执行此方法
    console.log(Buffer.concat(a).toString());
});
rs.on('error',function (err) {
    // 这个函数监听错误
    console.log(err);
});
// 可读流的方法 on('data') on('end')
// console.log(rs);
// rs继承了事件库 events 通过发布订阅来读取数据
// highWaterMark: 65536, 最大读取字节
// encoding: null 默认读取格式null
// autoClose: true, 读完以后就关掉
// on('data') on(end') on('error') on('pause') on('resume')

