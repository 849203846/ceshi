// node自带的模块叫核心模块
// 内置模块，用法同第三方模块 但是不需要下载

let uril=require('util');
// 实现继承  实现类型判断  提供了很多判断数据类型的方法

function Parent(name) {
    this.name=name
}
Parent.prototype.eat='吃';
function Child(age) {
    this.age=age
}
// 1.既能继承共有 又能继承私有属性 new Parent 不能传参
Child.prototype=new Parent();

// 2.只继承公有属性
// Child.prototype=Parent.prototype
function create(Pproto) {
    let fn=function () {}; //申明一个空函数 将函数的共有方法指向父类
    fn.prototype=Pproto;
    return new fn //构造当前方法的实例
}
 Child.prototype=Object.create(Parent.prototype); //创建一个prototype赋值给当前

let child=new Child();
console.log(child.eat);

// 3.只继承私有的
// function Child(age) {
//     Parent.call(this,name)
//     this.age=age
// }

// let chald=new Child(1,2)

// 4.class extends

// 5inherits
// uril.inherits(Child,Parent) //子类继承父类 只继承共有的方法
let child=new Child(1,2)
Object.setPrototypeOf(Child.prototype,Parent.prototype) //es6方法 es的属性

// util.isSymbol()