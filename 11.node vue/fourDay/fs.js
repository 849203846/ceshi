
// fs  fileSystem  文件操作 文件系统 目录。。
// node自导的模块 核心模块 内置模块
//  let fs=require('fs');//同步方法一般和异步方法都是同时给出的
// 能用异步 绝不用同步
// fs.readFileSync()//同步读取文件
// fs.readFile() 异步读取文件
// 读取的特点
//     读取的内容编码是什么？ 读取的文件必须存在 读取时默认读出的内容都是buffer类型
//     读的文件必须要存在吗？
// 读取的文件不能比内存大
// let result=fs.readFileSync('./name.txt');
// let result=fs.readFileSync('./name.txt','utf-8');
// let age=fs.readFileSync('./age.txt','utf-8');
// console.log({result,age});


// 异步读取文件
// 异步通过回调函数形参获取读取到的文件
// error-first data

// let obj={};
// // 1)嵌套callback 回调地狱
// // 2）利用回调函数调用同步的function执行
//
// let number=0
// fs.readFile('name.txt','utf-8',function (err,data) {
// // err 是错误 data是获取到的内容
//     if(err) return console.log(err);
//     obj.name=data
//     // number++
//     out()
// });
//
// fs.readFile('age.txt','utf-8',function (err,data) {
//     if(err) return console.log(err);
//     obj.age=data
//     // number++
//     out()
//
// });
// function out() {
//     // if(num==2){
//     //     console.log(obj)
//     // }
//     if(  Object.keys(obj).length===2){
//         console.log(obj);
//     }
// }
// Object.keys(obj) //把对象的key转化成了数组的每一项



// 利用发布订阅完成上面实例
let fs=require('fs');
let EventEmitter=require('events');
let e=new EventEmitter() ; //on once remove 都是实例上的方法
var obj={};
e.on('获取后',function () {
    if(Object.keys(obj).length===2){
        console.log(obj);
    }
});
fs.readFile('name.txt','utf-8',function (err,data) {
    if(err) return console.log(err);
    obj.name=data;
    e.emit('获取后')
});

fs.readFile('age.txt','utf-8',function (err,data) {
    if(err) return console.log(err);
    obj.age=data;
    e.emit('获取后')
});

// node版本不能低于7.6
// es6 promise 承诺 针对callback 提供了链式写法
// generator 为了解决异步方式的 想让异步代码写起来像同步的--废了
// function * yield - > async await想让异步代码写起来像同步 语法更加简介

// async await是基于promise的 高版本浏览器自带promise
// ajax四部曲-》 fetch 也是基于promise的





