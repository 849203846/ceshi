// 并行

let async=require('async');
console.time('code');
async.parallel([
    function (cb) {
        setTimeout(function (){
            console.log(1);
            cb(null,'1')
        },2000)
    },
    function (cb) {
        setTimeout(function (){
            console.log(2);
            cb(null,'2')
        },3000)
    },
    function (cb) {
        setTimeout(function (){
            console.log(3);
            cb(null,'3')
        },1000)
    },
],function (err,resole) {
    console.log(err);
    console.log(resole);
    console.timeEnd('code');
});
