let path=require('path'); //内置的模块
// 都是从当前目录出发获得一个绝对路径
// 只管解析路径 跟硬盘上是否有此路径没有一点关系
// 只管拼接出来路径 有没有 不管

console.log(path.resolve('views'));
console.log(path.join(__dirname, 'views'));
