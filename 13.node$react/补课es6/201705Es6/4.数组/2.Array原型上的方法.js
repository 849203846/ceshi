
// let ary=[1,2,3,4,5];
// copyWithin(n.m1,m2)
// n是开始替换的位置的索引
// m1表示读取的位置 默认值是0  可选
// m2表示读取结束的位置 默认值是最后一个 可选（不包括m2）
// console.log(ary.copyWithin(2));

// fill() 填充 一般常用作初始化一个数组
// console.log(ary.fill(null));
// 实现一个数组有七个1
// let ary1=Array(7).fill(1)
// console.log(ary1);
//  console.log(ary.fill(2, 4, 5));


// find/findIndex
// find先遍历数组，执行函数fn，一旦这个函数返回true 停止查找，返回当前项
// findIndex先遍历数组，执行函数fn，一旦这个函数返回true 停止查找，返回当前项的索引
// includes 判断一个数组中有没有某一项 返回布尔值








// 使用filter方法实现数组屈从

let arr=[1,1,1,1,1,2,2,3,2,3,2,3,4,54];
arynew=arr.filter((item,index)=>{
    //判断index之前组成的数组中有没有item
   return !arr.slice(0,index).includes(item)
})
console.log(arynew);






