// 发布订阅模式 一种一对多的一种模式  xxx:'11,22,33'

function Girl() {
    this._events={}
}
Girl.prototype.on=function (eventName,callback) {//订阅
    //先去对象中查找当前时间名是否有绑定过，如果没有则绑定一个一对多的数组关系 附则直接追加到数组中
    if( this._events[eventName]){
        this._events[eventName].push(callback)
    }else{
        this._events[eventName]=[callback]
    }
};
Girl.prototype.removeListener=function (eventName, callback) {
    if(this._events[eventName]){

        // filter返回false 表示在数组中移除掉 保证操作的时原来的对象
        this._events[eventName]= this._events[eventName].filter(item=>item!==callback)

}}
Girl.prototype.emit=function (eventName,...arg) {//发布   剩余运算符
    [].slice.call(arguments,1)
    // Array.from(arguments) 将类数组转化成数组
    if( this._events[eventName]){   //这里call的this代表的时Girl的实例
        this._events[eventName].forEach(item=>item.call(this,...arg))
    }
};
Girl.prototype.once=function (eventName,callback) {
  //绑定-》执行-》解绑
    function wrap() { //增加一个一次性函数 在次函数中调用原有的逻辑 在删除这个一次性函数
        callback.apply(this,arguments)
        this.removeListener(eventName,wrap)
    }
  this.on(eventName,wrap);


} ;
let girl=new Girl();
function cry(a,b) {
    console.log(a,b+'大哭');
}
function eat(a) {
    console.log(a+'吃');
}
girl.on('女生失恋',cry);
girl.once('女生失恋',eat);

girl.removeListener('女生失恋',eat);

girl.emit('女生失恋','你','a');