class Person{
    constructor(name){
         this.name=name
        console.log(this)
    }
    sleep(){
        console.log('睡觉');
    }
    static a(){ //通过类来调用
        console.log('a');
    }
}
class Girl extends Person{
    constructor(name,age){

        super(name); //super 中的this、默认指向girl 执行上面constructor函数name实参
       this.age=age
    }
}
let girl=new Girl(1,2)

console.log(girl.sleep());
console.log(girl.name);
console.log(girl.super)
console.log(girl.age);
Girl.a(); //子类可以调用父类的静态方法
// girl.a()