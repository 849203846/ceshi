// 发布订阅模式es6版本
var a=null
class Girl{
    constructor(){
        this._events={}
    }
    on(eventName,callback){
        if( this._events[eventName]){
                this._events[eventName].push(callback)
            }else{
                this._events[eventName]=[callback]
            }
    }
    removeListener(eventName, callback){
        if(this._events[eventName]){
            if(!this._events[eventName].hasOwnProperty(callback)){this._events[eventName]= this._events[eventName].filter(item=>item!==a)
            }
            this._events[eventName]= this._events[eventName].filter(item=>item!==callback)
    }
}
    emit(eventName,...arg){
        [].slice.call(arguments,1);
        if( this._events[eventName]){
            this._events[eventName].forEach(item=>item.call(this,...arg))
        }
    }
    once(eventName,callback) {
        function wrap() {
            callback.apply(this,arguments)
            this.removeListener(eventName,wrap)
        }
        a=wrap
        this.on(eventName,wrap);
    } ;
}
let girl=new Girl();
 let cry=(a,b)=>{
    console.log(a,b+'大哭');
}
let eat=(a)=> {
    console.log(a+'吃');
}
girl.on('女生失恋',cry);
girl.once('女生失恋',eat);

girl.removeListener('女生失恋',eat);

girl.emit('女生失恋','你','a');