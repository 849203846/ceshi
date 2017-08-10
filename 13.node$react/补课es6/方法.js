// includes 查找 返回布尔值  第二个参数表示开始查找的索引
// let str="123445"
//
// console.log(str.includes('2',3));

// startsWith/endsWith 是不是以狠萌字符作为开头/结尾
// 返回布尔值
// 第二个参数是开始查找的索引默认是
// console.log(str.startsWith('1'));
// console.log(str.endsWith('5'));
let str='   1 2 3  12 3'
let [ary]=[str]
console.log(ary);
var s1=''
for(var i=0;i<ary.length;i++){
   if(!str.startsWith(' ',i)){
       s1+=str.slice(i,i+1)
   }
}
console.log(ary);
// new Function 如果只穿一个参数 就是函数体 如果有形参的话第一个就是形参 第二个就是函数体 、
let ss='[{n:1}]'
new Function('return'+ ss)()
eval(ss)


// repeat(num) 复制
// 将字符串重复num次 如果传进来的是小数 向下取整  负数报错 如果是0.几 就是0
// 模版字符串 支持换行和空格 想要表示本身的意思就个人诶他转义 ${变量}