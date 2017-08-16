
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
export default class UserList extends Component{
    constructor(){
        super();
        this.state={users:[]}
    }
    componentWillMount(){
        //组件将要加载
        let users=this.props.model.getUsers();
        this.setState({users})
    }
    delUser=(id)=>{
       let users=this.props.model.delUser(id)
        this.setState({users})
    }
    render(){
        return(
            <div>
                {/*｛this.props.location.state?  <div className="alert alert-info text-centent">*/}
                {/*{this.props.location.state.msg}*/}
            {/*</div>:null｝*/}

            <ul className="list-group">
                {
                  this.state.users.map((user,index)=>(
                      <li className="list-group-item" key={index}>
                          <Link to={`/user/detail/${user.id}`}>
                              {user.username}
                          </Link>
                          <button onClick={()=>this.delUser(user.id)} className="btn btn-danger btn-xs pull-right">
                              删除
                          </button>
                      </li>
                      )
                  )
                }
            </ul>
            </div>
        )
    }
}