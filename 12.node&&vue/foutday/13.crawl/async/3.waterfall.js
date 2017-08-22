// 瀑布
//  从上往下落水
let async = require('async');
console.time('code')
async.waterfall([
    // waterfall也是串形状的 上一个执行后才能执行下一个任务
    // 数组中第一个函数只有一个参数
    function (cb) {
        setTimeout(function () {
            console.log('蛋');
            cb(null, '蛋')
        },2000)
    },
    // 从第二个任务开始 有两个参数 第一个参数就是上一个任务的返回值 第二个参数才是callback、
    function (data,cb) {
        setTimeout(function () {
            console.log('炒'+data);
            cb(null, '炒'+data)
        },1000)
    },
    function (data,cb) {
        setTimeout(function () {
            console.log('吃'+data);
            cb(null,'吃'+data)
        },3000)
    }
], function (err, resole) {
    console.log(err);
    console.log(resole);
    console.timeEnd('code')

});