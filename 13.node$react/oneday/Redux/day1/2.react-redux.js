import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
let reducer=(state=0,action)=>{
    switch (action.type){
        case 'ADD':
            return state+1;
        case 'MINUS':
            return state-1;
        default:
            return state;
    }
};
let store=createStore(reducer);
window.store=store;
// 输入 读取仓库的状态用来渲染组件
// 输出 组建里的一些行动可以派发动作 从而修改仓库的状态
store.subscribe(()=>{
    console.log(store.getState());
});
class Counter extends React.Component{
 constructor(){
     super();
 }
    render(){
        return(
            <div>
                <p>{store.getState()}</p>
                <button onClick={()=>store.dispatch({type:'ADD'})}>+</button>
                <button onClick={()=>store.dispatch({type:'MINUS'})}>-</button>
            </div>
        )
    }
}
render();
function render() {
    ReactDOM.render(<Counter>

    </Counter>,document.querySelector('#root'));
}
store.subscribe(render);
