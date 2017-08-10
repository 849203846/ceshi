let p1=new Promise((resolve,reject)=>{
    resolve('success')
    // 将错误信息传给 下一个函数
})
// then方法任然返回一个rpomise对象
// 没有捕获到的错误信息会往下一个promise传递哦
p1.then(()=>{
// 返回值是给下一个成功的函数穿的实参
},()=>{

}).then(()=>{

},()=>{

})