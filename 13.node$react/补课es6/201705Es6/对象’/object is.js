// object.is
// 三个等号的判断 主要是解决和nan相等的问题
console.log(Object.is(NaN, NaN));
console.log(Object.is(1,1));


// Object.assign 合并对象
let obj1={name:'zhufeng'}
let obj2={age:'8'}

console.log(Object.assign(obj1, obj2));
