import React,{Component} from 'react'
export default class UserDetail extends Component{
    constructor(){
        super();
        this.state={user:{}}
    }
    componentWillMount(){
        let id=this.props.match.params.id;
        let user=this.props.model.getUser(id);
        // let users=this.props.midel.getUsers()
        // let user=user.find(item=>item.id==id)
        this.setState({user});
        console.log(this.state.user);
    }
    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <button className="btn btn-info" onClick={()=>this.props.history.goBack()}>
                        返回
                    </button>
                </div>
            <div className="panel-body">
            <table className="table-bordered table">
                <thead>
                <tr>

                    <th>ID</th>
                    <th>用户名</th>
                    <th>邮箱</th>
                </tr>
                </thead>
                <tbody>
               <tr>
                 <td>{this.state.user.id}</td>

                 <td>{this.state.user.username}</td>

                 <td>{this.state.user.email}</td>
               </tr>
                </tbody>

            </table>
            </div>
            </div>
        )
    }
}