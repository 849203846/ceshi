import React,{Component} from 'react'
import {connect} from 'react-redux'
import todos from '../store/actions/todos'
class Todos extends Component{
    add=(event)=>{
        if(event.keyCode==13){
            this.props.add_todo(event.target.value)
        }
    };
    render(){
        return(
        <div>
            <input type="text" onKeyUp={this.add}/>
            <ul>
                {
                   this.props.list.map((item,index)=>(
                       <li key={index}>{item}
                       <button
                           onClick={this.props.del_todo(index)}>删除</button></li>
                   ))
                }
            </ul>
        </div>
        )
    }}
let mapStateToProps=state=>({list:state.todos.list});
    export default connect({
        mapStateToProps,
        // mapDispatchToProps
        todos
    })(Todos)