import React,{Component} from 'react'
import {connect} from 'react-redux'
import actions from '../store/actions/todos'
import { CSSTransitionGroup } from 'react-transition-group' // ES6
class TodoBody extends Component{
    render(){
        let slierall=<li className="list-group-item">
            <div className="checkbox">
                <label>
                    <input type="checkbox"
                           checked={this.props.activeCount==0}
                           onChange={(event)=>this.props.toggleAll(event.target.checked)}/>
                    {this.props.activeCount==0?'全部选中':'全部取消'}
                </label>
            </div>
        </li>
        return(
           <ul className="list-group">
               {
                   this.props.list.length>0?slierall:null
               }
               <CSSTransitionGroup
                   transitionName="example"
                   transitionEnterTimeout={500}
                   transitionLeaveTimeout={300}>
               {
                   this.props.list.map((item,index)=>(
                       <li
                           className="list-group-item"
                           key={item.id}>
                           <div
                               className="checkbox">
                               <label>
                                   <input
                                       type="checkbox"
                                       checked={item.completed}
                                       onChange={()=>this.props.toggleTodo(item.id)} />    {item.text}

                               </label>
                               <button
                                   className="btn btn-xs btn-danger pull-right"
                                   onClick={()=>this.props.delTodo(item.id)}>删除</button>
                           </div>
                       </li>
                   ))
               }
               </CSSTransitionGroup>
           </ul>
        )
    }
}
// mapStateToProps 把store的状态数映射为当前组建的属性对象
export default  connect(
    state=>({

        list:state.todos.list.filter((item,index)=>{
                switch(state.filter){//判断过滤器的类型
                    case 'active':
                        // 如果只显示未完成的
                        return !item.completed;
                    case 'completed':
                        return item.completed;
                    default:
                        return true;
                }}),
        activeCount:state.todos.list.reduce((prev,next)=>{
           return prev+Number(!next.completed)
    },0)
    }),
    actions
)(TodoBody)
