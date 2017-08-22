let async = require('async');
// 单行执行
console.time('cost');
async.series([
    function (cb) {
        setTimeout(function () {
            console.log(1);
            cb(null, '1')
        }, 2000)
    },
    function (cb) {
        setTimeout(function () {
            console.log(2);
            // 异步代码完成后要调用cb 传如错误对象和返回值
            cb(null, '2')
        }, 3000)
    },
    function (cb) {
        setTimeout(function () {
            console.log(3);
            cb(null, '3')
        }, 1000)
    }
], function (err, result) {
    console.log(err);
    console.log(result);
    console.timeEnd('cost')
});