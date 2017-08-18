import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import './Todos.less'
import Footer from "./footer";
export default class Todos extends Component{
    render(){
        return(
            <div  className="container" style={{marginTop:50}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-heading"><TodoHeader/></div>
                        <div className="panel panel-body"><TodoBody/></div>
                        <div className="panel panel-footer">
                                <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
