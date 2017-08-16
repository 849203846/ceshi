import React,{Component} from 'react'
import {Prompt} from 'react-router-dom'
export default class UserAdd extends Component{
    constructor(){
        super();
        this.state={blocking:false} //默认不组织
    }
    handleSubmit=(event)=>{
        event.preventDefault();
       let username=this.refs.username.value;
       let email=this.refs.email.value;
       let users={username:username,email:email};
       this.props.model.addUser(users);
        // this.props.history.push('/user/list',{msg:'用户新增成功'})//指向一个新的路径
        this.setState({blocking:false},()=>this.props.history.push('/user/list'));
        this.props.history.push('/user/list')
    };
    handleChange=(event)=>[
        this.setState({
            blocking:event.target.value&&event.target.value.length>0
        })
    ];
    render(){
        return(
            <div>
                <Prompt //弹出框
            when={this.state.blocking} //默认不阻止
            message={location=>`你是否想要跳转到 ${location.pathname} 上面呢`}
            />
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" className="control-label">用户名</label>
                    <input onChange={this.handleChange} ref="username" required id="username" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="control-label">邮箱</label>
                    <input ref="email" required type="email" className="form-control" id="email"/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-info"/>
                </div>
            </form>
            </div>
        )
    }
}