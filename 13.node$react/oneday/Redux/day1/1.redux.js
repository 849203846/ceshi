// import {createStore} from 'redux';
// let {createStore}= require( 'redux');
let createStore=(reducer)=>{
let state;
let getState=()=>state;
let listeners=[];
let dispatch=(action)=>{
    // 传入老状态和本次的action 返回新状态
state=reducer(state,action);
    listeners.forEach(item=>item())
    // 让所有的监听函数依次执行
};
let subscribe=listener=>{
    listeners.push(listener)
};
dispatch({});
return {
    getState,dispatch,subscribe
}
};
// 创建仓库、
// redux和react并没有必然的关系
// 调用createStore方法可以创建一个仓库的实例
let initstate=0;//初始状态
let reducer=(state=initstate,action)=>{
    // state 代表是当前的状态 state可以是任何数据类型
    // action 接受传入的老状态 返回新的状态
    switch (action.type){ //判断action的类型
        case 'ADD':
            return state+1;
        case 'MINUS':
            return state-1;
        default:
            return state;
    }
};
let store=createStore(reducer);
// store.getState获取当前状态
// store.dispatch 派发action
// store.subscribe订阅状态变化事件 当状态发生变化时 事件函数执行
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch({type:'ADD'});
store.dispatch({type:'ADD'});

