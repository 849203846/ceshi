// readFile() 异步 不能读取比内存大的文件
let fs=require('fs')
//写的特点  1. 写入的编码格式 默认的是字符串 utf8格式 会将内容tostring
//          2. 写的文件不存在 如果文件不存在则会创建 如果存在会清空内容，再写入
// fs.writeFileSync('1.txt',2)


// 异步写入方法
fs.writeFile('1.txt',234,function (err) { //成功后的回调函数 接受到的数据是错误信息
    console.log(err);
});



















