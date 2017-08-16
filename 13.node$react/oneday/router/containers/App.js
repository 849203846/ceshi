import React, {Component} from 'react'
//基于哈希原理实现的router路由 as 表示起一个别名 相当于 let router=HashRouter
// BrowserRouter as Router 用的H5  有不兼容问题
import {
    // BrowserRouter as Router,
    HashRouter as Router, //路由容器
    Link,
    Route, //路由规则
Switch  //路由匹配一个 其他的就不往后匹配了了
} from 'react-router-dom'
import Home from "../components/Home";
import User from "../components/User";
import Profile from "../components/Profile";
import MenuLink from '../components/MenuLink'
import 'bootstrap/dist/css/bootstrap.css';
let NoMatch=()=>(
    <div>路径404 404 404 404</div>
);
export default class App extends Component {
    render() { //渲染
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand">
                                    用户管理系统
                                </a>
                            </div>
                            <div>
                                <ul className="nav navbar-nav">
                                    <MenuLink label="首页" exact={true} to="/"/>
                                    <MenuLink label="用户管理" exact={false} to="/user"/>
                                    <MenuLink label="个人设置" exact={false} to="/profile"/>
                                    {/*<li><Link to="/">首页</Link></li>*/}
                                    {/*<li><Link to="/user">用户管理</Link></li>*/}
                                    {/*<li><Link to="/profile">个人设置</Link></li>*/}
                                </ul>
                            </div>
                        </div>
                    </nav>
                    l
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={Home}/>
                                <Route
                                    path="/user"
                                    render={(props) =>
                                        <User
                                         model={this.props.model}>
                                        </User>}/>
                                <Route
                                    path="/profile"
                                    component={Profile}/>
                                    <Route component={NoMatch}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}