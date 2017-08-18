import React,{Component} from 'react'
import {connect} from 'react-redux'
import actions from '../store/actions/todos'
class TodoHeader extends Component{
    handleKeyDown=(event)=>{
        if(event.keyCode===13&&event.target.value.length>0){
            this.props.addTodo(event.target.value);
            event.target.value=''
        }
    };
    render(){
        return(
                <input
                    onKeyUp={this.handleKeyDown}
                    type="text"
                    className="form-control"
                    placeholder="请输入你想办的事..."/>
        )
    }
}
export default connect(
    null,
    actions
)(TodoHeader)