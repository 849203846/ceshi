// // 数组的解构赋值
// let [x,y]=[1,2]
// console.log(x, y);
// console.log("x=%s",x, y);
// console.log("x=%s,y=%s",x, y);
// // %s 占位符


// 默认值
//
// let [d,dd,ddd='ddd']=[1,2,undefined]


// console.log(d, dd, ddd);
// 只有在结构赋值的值是undefined的情况下 才会走默认值 否则不会

// 对象的解构赋值

     // 1，基础的情况 变量名=属性名
// let {a,b}={a:'a',b:'b'};


// 变量名！=属性名
// let {a:x,b:y}={a:'a',b:'b'}
// console.log(x, y);

// 嵌套
// let {a:[,m],b:n}={a:[1,2],b:'bb'}
// console.log(m, n);
// let {name:mm,s}={name:'qq'}
// console.log(mm, s);
// 默认值
let {name:mm,s:f="f"}={name:'qq',s:undefined}
let z;
[z]=[1]
console.log(z);

let v;
({v}={v:'v'})
// 大括号直接写在行首 会以为是块级作用域


// 赋值不是一个对象 将其他数据类型变成对象使用的是object()这个方法\
// object(res) 将res变成对象返回出来
let {o}=1
console.log(Object(1));

// 字符串=》结构赋值的时候

// 1.函数，形参的赋值 fun

function fn1([x='1',y]) {
    console.log(x, y);
}
fn1([,2])
// 一般情况下我们都会把默认值写在后面

function fn2(x=1,y=23) {
    console.log(x, y);
}
fn2()