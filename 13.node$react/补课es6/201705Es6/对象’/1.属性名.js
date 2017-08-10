let a=[1,2]
let b='bb'
let o={}
// 对象的属性名必须是字符创 如果你写其他的，就会默认调用tostring方法转为字符串
let obj={
    a,
    b,
    fn(){},
    //属性名可以使用简单的表达式,写在【】中
    ["name"+b]:'哈哈',
    ["A"+o]:'嘿嘿'
};
console.log(obj);
    

