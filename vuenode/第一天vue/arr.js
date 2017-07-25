 //q pop shift unshift push slice splice concat lastindexof indexof reverse sort join foreach map

//find 查找 includes 包含 去带indexof   map foreach reduce filter取代splice some
// 1.更改语法 2.配置node
// function c(a, b) {
//     return a+b
// }
// let a=(a,b)=>{
//     return a+b;
// };
// let b=(a,b)=>a+b;
// 1.如果是对象需要用小括号包住
// let a=(a,b)=>({})
// console.log(a(1, 2));
//2,没有this指向，用箭头函数解决this问题，点前面是的谁 this就是谁


// let obj={
//     a:function () {
//         console.log(this);
//         setTimeout(function () {
//             console.log(this);
//         })
//     }
// };
// obj.a(); //当前this是obj  定时器的this是window
// 可以使用that变量保存的方式保留this指向
//想改变当前定时器this用bind方法改变this关键字， bind多次绑定是无效果的
// let obj1={
//     a:function () {
//         console.log(this);
//         setTimeout( ()=> {
//             console.log(this);
//         })
//     }
// };
//箭头函数中没有this指向的，向父级找this(箭头函数同样没有arguments）


//闭包：私有化 当一个函数执行后返回一个引用类型对象，并且被外部变量接收
// function a(b) {
//     return function (c) {
//         return b+c
//     }
// }
// console.log(a(1)(2));//高阶函数 ，函数中有多个箭头
let a=b=> c =>b+c;
console.log(a(1)(2));


//------------------------------------------------------------------------
// 1.includes 判断当前数据有没有5 返回的是boolean
let arr=[1,2,3,4,5];
console.log(arr.includes(5));
// 2.some 看一看 返回布尔值
var flag=arr.some((item,index)=>item>3);
// item每一项
//3.find 返回的是找到后的结果 找到一个后就不再继续查找
var resuit=arr.find((item,index)=>item>3);
console.log(resuit);
// 4.reduce 收敛 返回的都是叠加都的结果
let num=arr.reduce((prev,next)=>{
    console.log(prev, next);
    return prev+next ;//会将返回的结果当作下一次的上一个
},0); //这里面的第二个参数是手动指定的前一个
console.log(num);
let ary=[{price:30},{price:40},{price:50}];
let num2=ary.reduce((prev,next)=>{
    return prev+next.price//保证上一项永远是数字
},0);

console.log(num2);

// 5.filter 过滤 返回的是一个过滤后的数组，满足条件就放到数组中

let newarr=arr.filter(item=>!(item<=3));
console.log(newarr);

// 6. map 映射 映射出一个新的数组,map函数中的返回值将会作为数组里面的新项
let ma=[1,2,3];// tempate string

var res=ma.map(item=>`<li>${item}</li>`);
console.log(res.join(``));
//以上方式都属于声明方式 不关心内部结构
// 我们以前写代码都类似于编程式代码
// angular 1.0 angular 2.0 angular 4
// 虚拟DOM
// ##库和框架
// jQuery是库 库是提供了好多方法，你来调用

// 框架，是你写好的 人家调用你的

// uve 有两种使用方式
// 1.正常thml引入vue。js
// 2.大型项目开发 （工程化 vue全家桶 es6+webpack+vue+vue-router+vuex+axios）

// mvc是单向的
// -mvc->backbone
// -mvvm angular vue react
// -要求mv*框架npm

// 安装vue

// npm install vue


