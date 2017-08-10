// Map 创建一个Map实例
let a='a',b=[1,2],c={naem:'zhufeng'},d=new Date()
// new Map(键，值)
// Map数组结构中的建可以是任何数据类型的
let map1=new Map([[a,'string'],[b,'array'],[c,"object"],[d,'date']])
// console.log(map1);

// 方法
// set
// console.log(map1.set({a: 'a'}, '我是新来的')); //返回增加后的map对象
// get 返回值是得到的那个值的valuse
console.log(map1.get(b));

// has
// delete
// clear
// keys values entries foreach
for(var key of map1.entries()){
    console.log(key)
}
for(var key of map1.entries()){
    console.log('我是建:%s,我是值:%S',key)
}