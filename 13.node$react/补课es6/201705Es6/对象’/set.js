let ary=[NaN,NaN,1,1,2,3,2,3,{},{},null,null];

let set1=new Set(ary);
console.log(set1);
function fn1(ary){
    // return [...new Set(ary)]
    return Array.from(new Set(ary))
}
fn1(ary);

// 方法
// add 增加
set11.add(10)//不能哦添加之前已经有的项目
// add(val) 返回值是增加后的set对象 可以实现链式写法

// delete 删除某一项
set1.delete(1) //返回值是布尔 里面没有这一项 删除失败

// clear 清空
set1.clear() //没有返回值


// has 判断有没有这一项，返回值是布尔
console.log(set1.has(NaN));

// 遍历
// keys 便利迟来每一项
// values
// entries
// foreach
