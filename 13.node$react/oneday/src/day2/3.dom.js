/**
 * 另外一种获得DOM对象的方法
 * 什么叫非受控组件 表单元盛的值不受状态控制
 */
import React from 'react'
import RouterDOM from 'react-dom'

class Calculator extends  React.Component{
    constructor(){
        super();
        this.state={result:0}
    }
    handlechange=()=>{
    // 如何获取真实DOM元素
    //     ref reference 引用 获取到真是DOM元素‘

        let a =this.refs.a.value
        let b =this.refs.b.value

        this.setState({result:parseFloat(a)+parseFloat(b)})
        console.log(parseInt(this.refs.a.value)+parseInt(this.refs.b.value));
    }
    render(){
        return (
            <div>
                <input ref='a' type="text" defaultValue={0} onChange={this.handlechange} />
                +<input ref='b' type="text" defaultValue={0} onChange={this.handlechange} />
                ={this.state.result}
            </div>
        )
    }
}
RouterDOM.render(<Calculator/>,document.querySelector('#root'))