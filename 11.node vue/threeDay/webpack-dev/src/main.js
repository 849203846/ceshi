//入口文件 代码从这里开始运行
//我喜欢前端就用import export
// 后端用module.exports require

// let str1=require('./aa.js');
import str from './aa.js'
let a=b=>b;
console.log(str);
console.log(a(1));



// es7
let obj1={name:'zfpx'};
let obj2={age:9};
console.log({...obj1,...obj2});


//引用css样式
// import './index.css'
import './style.less'
//通过js引入的图片不会自动打包的
import o from './1.gif'
for(let i=0;i<10000;i++){
    let img=document.createElement('img');
    img.src=o;
    document.body.appendChild(img);
}
