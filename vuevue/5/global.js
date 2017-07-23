
//全局对象  window  global最大 挂在在global 上的属性也可以直接访问
// console.log(this);
//   在文件中直接打印this并不是global
//   文件中的this被更改了 ,more在文件中执行时套了一个闭包函数，为了实现模块化，再此函数中将this指向改掉了
// //
// (function () {
//     console.log(this); //global
// })()


// var a=100
// console.log(global.a);//undefined
// // 我们申明的属性不会自动挂在到global上面，不会自动群污染全局对象
//
//
// a=100
// console.log(global.a)//100

// console.log(global.global) global 可以自己调用自己

// process 进程 单线程
// Buffer 缓存区 缓冲区 可以表示内存
// clearImmediate 清除立即
// setImmediate 立即
// setTimeout()
// clearTimeout()
// console.log()  error warn info dir time timeEnd
// console.log(global)·
// console.time(1)
// for(var i=0;i<100;i++){
//
// }
// console.timeEnd(1)//1: 0.197ms


// setTimeout()
setTimeout(function (eat,eat1) {
    console.log(eat,eat1);
    console.log(this);//setTimeout 中默认的this指向的是自己，改变this指向 call bind apply
    // bind 改变this指向/会返回一个新的函数，函数柯里化（预置参数）当前this是｛｝/

    // 暂存变量 var that=this
    // 箭头函数没有this指向 this指向是上一层的
}.bind(this),2000,'馒头','包子')
// setTimeout(()=>{console.log(this)}); 当前的this向上级找

// setTimeout(()=>{console.log(arguments)}); 箭头函数没有arguments node环境全局下自己有一个自执行函数


// function a(x, y) {
//     return x+y
// }
// let b=a.bind(this,1);
// console.log(b(2));//2传给了y


// setImmediate() 立即 不能设置时间 其他的和定时器一模一样 都是异步的代码
// setImmediate(function () {
//     console.log(1)
// },2000)
// setTimeout(function () {
//     console.log(2)
// })
// 如果定时器不设置时间 说不定谁先打印


// process 进程
// console.log(process.pid);查看自己的进程
// process.kill(111)//可以用来杀死进程
// console.log(process.env);//在开发时会设置环境变量
// set NODE_ENV=DEV
let url='';//上线时不会设置node_env所以会自动采用下面的路径
if(process.env.NODE_ENV==='DEV'){
     url='http://localhost:3000'
}else{
   url='http://www.baidu.com'
}
console.log(url);


// process.nextTick() 下一个队列 异步方法
setImmediate(function () {
    console.log(2)
})
process.nextTick(function () {
    console.log(1)
})

// 异步方法 setTimeout() process.nextTick setImmediate()


// 文件模块
// 必须引用时加相对路径
// 第三方模块需要进行安装
// 第三方模块全局使用（DOS）
// http-server 通过npm按装 在npm下做了一个映射 当在命令行下执行命令时会去npm下查找 并没有安装到全局的环境变量中

// npm install http-server
// -g全局

// npm install -g nrm    //node的源管理 帮你切换源头
// nrm ls 展示源头列表
// nrm test 测试网络
// nrm use taobao 使用淘宝源

// 本地使用（安装在当前目录在代码中使用）
// 安装之前需要初始化（可以记录在小本上） package.json 不能有注释,不能有中文 不能有大写
// npm init -y 初始化环境

// 下载第三方模块
// 开发依赖 开发时用的 上线就不要了less
// npm install less --save-dev
// 项目依赖 开发时用的 上线时也需要 jQuery
// npm install jquery --save
// npm uninstall jquery --save 怎么安装的怎么卸载依赖
// 安装全部依赖 npm install

// yarn
// npm install yarn -g 安装全局yarn
// yarn init -y 初始化文件
// yarn add jQuery 增加项目依赖
// yarn add less --dev 增加开发依赖
// yarn remove jess --dev 删除模块
// yarn install 安装全部依赖


// 指定版本安装
// npm info jquery 查看当前模块的版本号
// npm jquery@2.0.0 安装2.0版本

// 安装可以通过npm和tarn安装


// 发布包
// 登录帐号 保证当前在npm上

// nrm use npm
// npm addUser 如果没有 则是注册 有了则是登录

// npm whoami 查看当前登录的名字
// npm publish  发布包

// 第三方模块可以直接引用模块名字 会自动群当前目录下查找 找到对应的package.json文件 中的main文件 将其映入，如果找不到会去 上级目录查找 到根目录没找到则报错
// module.paths 模块的查找路径 将jw-handsome下载下来使用


// 核心模块
//     uril 继承
// events 事件库 发布订阅模式 class2231、






