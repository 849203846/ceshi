/**
 * 如何在react实现DOM操作
 * 什么叫受控组件 input框的值受状态控制
 * 什么叫非受控组件
 *1.如何在react中获取真是DOM对象
 * 2.
 **
 *
 **/
 import React from 'react'
 import ReactDOM from 'react-dom'

class Calculator extends React.Component{
     constructor(){
         super();
         // 定义一个初始化状态对象
         this.state={a:0,b:0}
     }
    habdkeChange=(event,attr)=>{
         if(event.target.value){
             this.setState({[attr]:isNaN(event.target.value)?0:parseInt(event.target.value) })
         }
    }
     render(){
         return(
             <div>
                 <input type="text" value={this.state.a} onChange={(event)=>this.habdkeChange(event,'a')}/>+
                 <input type="text" value={this.state.b} onChange={(event)=>this.habdkeChange(event,'b')}/>=
                 {this.state.a+this.state.b}
             </div>
         )
     }
}


ReactDOM.render(<Calculator/>,document.querySelector('#root'));