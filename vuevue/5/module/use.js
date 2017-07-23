//同步、异步 callback

let c=require('./module');  //同步方法，一个模块多次使用只执行一次，会缓存模块

// console.log(a)//拿不到
// console.log(b); //定义在global上可以拿到
console.log(c);//默认require的返回值并不是exports对象 是module。exports
// module.exports=exports={}
var a=b={};
// b.name=1
// a=1

console.log(a);