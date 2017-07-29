let fs = require('fs');

function read(filename) {
    // new process 中必须传递一个executor函数 这个函数中 有成功的回调 和失败的回调
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) return reject(err);
            resolve(data)
        })
    })
}


// read('name.txt').then(
//     function (data) {
//         console.log(data);
//         read('age.txt').then(function (a) {
//             console.log(a);
//         },function (b) {
//             console.log(b);
//         })
//     },  function (err) {
//         console.log(arr);
//     })


// 链式写法
// read('name.txt').then(data => { //读取name成功后读取age
//     console.log(data);//返回的是promise可以继续then
//     return read('age.txt')
// }).then(a => {//第二个then处理的是age的数据
//     console.log(a);
// }).catch(err => {//统一捕获错误
//     // console.log(err);
// });




// all方法中传递的是一个promise实例的数组 会从新返回一个promise实例
    Promise.all([read('name.txt'),read('age.txt')]).then(([name,age])=>{
        // console.log(data);data是 数组 按照请求的顺序 返回的结果组成的数组
        //data - > [ '哈哈？', '8' ]
        console.log(name, age); //形参利用解构赋值拿到每一项
    }).catch(function (err) {
    // 如果某一步出错了 则会进入catch
});