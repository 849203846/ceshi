let fs = require('fs');

function read(filename) {
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
read('name.txt').then(data => { //读取name成功后读取age
    console.log(data);//返回的是promise可以继续then
    return read('age.txt')
}).then(a => {//第二个then处理的是age的数据
    console.log(a);
}).catch(err => {//统一捕获错误
    // console.log(err);
});

