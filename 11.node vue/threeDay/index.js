// 1
// import {str,a} from './a.js';
// // import './a.js';
// // let obj=require('./a')   //node写法
// // import xxx from'./a.js'; 东西不存在
//
// // let {str,a}={str:'我很帅',a:function}
// console.log(str);
// a();


// 2
// import * as obj from './a.js'
// 把所有的作为obj对象  obj={str:'我很帅'}
// console.log(obj.str);
// 如果一个个导出需要使用* as 或者结构赋值的方法


// 3
import a from './a.js';
console.log(a);
// a代表的是默认代表的结果



// module.exports 和exports不能公用
// exportdefoult 和export不能共用


