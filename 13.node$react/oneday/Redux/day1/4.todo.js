import React from 'react'
import {createStore} from 'redux'
import ReactDOM from 'react-dom'
let initState={list:[]};
let addTodo=(text)=>{
    return{type:'ADD_TODO',text}
};
let delTodo=(index)=>{
    return{type:'DEL_TODO',index}
};
let reducer=(state=initState,action)=>{
    switch (action.type){
        case 'ADD_TODO':
            // state.list.push(action.text) 永远不要修改原来的状态 没意都要生成一个新的状态
            return {list:[...state.list,action.text]};
        case 'DEL_TODO':
            return {list:state.list.filter((item,index)=>index!=action.index)};
        default :
            return state
    }
};
let store=createStore(reducer);
class Todo extends React.Component{
    constructor(){
        super();
        //这里其实是实现了store的扎un柜台和本地状态的映射
        // 仓库里状态很多 但是笨组件只需要很少一部分 那么值需要把自己需要的逼疯拿过来即可
        this.state={list:store.getState().list}
    }
    add=(event)=>{
        if(event.keyCode==13){
            store.dispatch( addTodo(event.target.value))
           // {type:'ADD_TODO',text:(event.target.value)}
            event.target.value=''
        }
    }
    delete=(index)=>{
        store.dispatch(delTodo(index))
    }
    componentWillMount(){
        store.subscribe(()=>{
            this.setState({list:store.getState().list})
        })
    }
    render(){
        return(
            <div>
                <input type="text" onKeyUp={this.add}/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <div key={index}>
                            <li>{item}</li>
                                <button onClick={()=>this.delete(index)}>删除</button>
                        </div>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<Todo/>,document.querySelector('#root'));
