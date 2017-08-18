import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import todos from '../store/actions/todos'
import filter from '../store/actions/filter'

class Footer extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-sm-3">
                    <span style={{lightHeight:35}}>还有{this.props.activeCount}待办事项</span>
                </div>
                <div
                    className="col-sm-6"
                    onClick={event=>this.props.changeFilter(event.target.value)}>
                    <button
                        value="all"
                        className={"btn btn-default filter"+(this.props.filter=='all'?'btn-success':'btn-default')}>全部</button>
                    <button value="active" className="btn btn-default filter">未完成</button>
                    <button value="completed" className="btn btn-default filter">已完成</button>
                </div>
                <div className="col-sm-3">
                    {
                        this.props.activeCount>0?   <button
                            className="btn btn-danger btn-sm"
                            onClick={this.props.delAllCompleted}>删除已完成</button>:null
                    }
                </div>
            </div>
        )
    }
}

export default connect(
    state=>({
        list:state.todos.list,
        activeCount:state.todos.list.reduce((prev,next)=>{
            return prev+Number(!next.completed)
        },0),
        completedCount:state.todos.list.filter((item=>item.completed))
    }),
    {...todos,...filter}
)(Footer)
