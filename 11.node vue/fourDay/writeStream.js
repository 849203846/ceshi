let fs=require('fs');
// 写入默认utf8 文件不存在则创建 覆盖写入
let ws=fs.createWriteStream('2.txt',{highWaterMark:4});
// console.log(ws);
// highWaterMark: 16384 16k 写入的最大内存
// defaultEncoding: 'utf8', 默认编码
// ws.write() ws.end()
var flag=ws.write('123',function () {
    console.log('成功'); //此方法是异步函数 而且有返回值 一般不用回调函数
}); //只能放字符串或者buffer类型的
console.log(flag); //true
// flag代表是否还能写入 如果你给我的已经沾满我的预期 那么就返回false 否则返回true
ws.end('吃饱了');//关闭文件  end中的参数会在关闭前调用write方法写入文件内 会将未写完的内容强制写入，最终关闭文件
// end以后文件关闭 不能调用write方法和end方法

