// _events 发布订阅
// node提供了一个事件库  自带事件库

let EventEmitter=require('events')// on once removeListener
let util=require('util') //继承方法用的
util.inherits(Girl,EventEmitter)//只继承共有属性 Object.setPortotypeOf(child.prototype,parewnprototype)
function Girl() {

}
let girl=new Girl()
function cry() {
    console.log('cry')
}

girl.on('失恋了',cry)

girl.emit("失恋了")