

// 扩展运算符、

    // 1.将非数组转换为数组
function getA(likeArray) {
    return [...likeArray]
}
// getA()
        // 2.将数组变为非数组
let ary=[1,2,3]
console.log(...ary);
// 代替apply方法
console.log(Math.max.apply(null, ary));
console.log(Math.max(...ary));

console.log(new Function(2).name);
console.log(new Function(2).name);
console.log(new Function(2).name);
console.log(new Function(2).name);
function fn() {
    
}

console.log(fn.bind(null).name);


// 箭头函数一般用来当作回调函数 常用来当作参数

