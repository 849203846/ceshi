//    配置node环境，配置es6语法
function read(callback) {
    setTimeout(()=>{
        let str='dandsome';
        callback(str)   //执行传入的函数 将数据作为参数传入
    },2000)
}
read(function (str) { //将后续的逻辑当作参数传入到read中
    console.log(str)
})
;
// 前端 异步的 定时器 事件 ajax 回调函数
// 服务端只有定时器和回调函数


// 同步和异步
// 同步会阻塞主线程，能用异步的绝不用同步

// 阻塞和非阻塞 指代的是厨师  内核
// 非阻塞是异步的前置条件

// 单线程（异步） 多线程（同步） 同一时间干很多事 切换上下问速度比较快 感觉想干很多事情一样

// 事件环