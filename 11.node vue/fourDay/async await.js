let fs = require('fs');
function read(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) return reject(err);
            resolve(data)
        })
    })
}
// 不支持并发调用 async await es7中的关键字 必须搭配使用
async function getobj() {
    let name=await read('name.txt');// name就是成功后的结果
    let age=await read('age.txt');
    console.log(name,age);
}
getobj();

// callback- >  promise - > asynchronousawait

