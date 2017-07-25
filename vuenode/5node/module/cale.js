let calc={
    '+'(a,b){return a+b}
};
// console.log(calc["+"](1,2)) //3


exports.a=calc['+']
module.exports=calc['+'];

// console.log(module.exports===exports) //false