import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group'
import ReactDOM from 'react-dom';

import './index.css'
class Todos extends React.Component{
    constructor(){
        super();
        this.state={list:['aaa','bbb','ccc']}
    }
    handleKeyDown=(event)=>{
        console.log(1);
        if(event.keyCode==13&&event.target.value.length>0){
            this.setState({list:[...this.state.list,event.target.value]});
            event.target.value=''
        }
    };
    delete=(index)=>{
        let list=this.state.list.splice(index,1);
            this.setState({list:[list]});


    };
    render(){
        let items=this.state.list.map((item,index)=>(
            <li key={index}
            onClick={()=>this.delete(index)}
            >{item}</li>

        ));
        return(
            <div>
                <input type="text" onKeyUp={this.handleKeyDown}/>
                <ul>
                    <CSSTransitionGroup
                    transitionName="move"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    >
                    {items}
                    </CSSTransitionGroup>
                </ul>
            </div>
        )
    }

}


ReactDOM.render(<Todos/>,document.querySelector('#root'));


