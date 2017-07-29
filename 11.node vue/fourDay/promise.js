// promise是原声自带的一个类
let promise=new Promise(function (resolve,reject) {
    // resolve表示成功 调用后会变成成功态
    // reject调用后会变成失败态
   resolve()
// 如果成功后则不能再更改状态
});
// executor  执行器 要接受一个函数

//promise实例上才有then方法
// then 表示当状态改变后的操作在then中书写 第一个是成功函数 第二个是失败函数
promise.then(function () {
    console.log('成功');
}, function () {
    console.log('失败');
})



