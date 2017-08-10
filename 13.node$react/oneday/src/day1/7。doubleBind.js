import React from 'react'
import ReactDOM from 'react-dom'
/**
 * 类里面的方法排列是有顺序的
 * 1.类的静态方法和属性 static propTypes defaultProps
 * 方法属于类的，是类的属性 实例无法访问
 * 构造函数 constructor（）、
 * 放生命周期函数
 * 自定义方法
 * 5.render方法,
 *
 */
class Input extends React.Component{
    constructor(){
        super();
        this.state={number:''};
        this.state.number=localStorage.getItem('val')
    }
    bian=(event)=>{
        //event 事件对象 这个对象并非原声的事件对象 而是经过react包装过的事件对象
        // event.target input元素对应的真是怨怒射
        this.setState({number:event.target.value},()=>{
        })
    };
    handleclick=()=>{
        localStorage.setItem('val',this.state.number)
    };
    render(){
        return (
            <div>
                <p> {this.state.number}</p>
                <input type="text" onKeyUp={this.bian} value={this.state.number} id="input" />
                <button onClick={this.handleclick}>保存</button>
            </div>
        )
    }
}
ReactDOM.render(<Input/>,document.querySelector('#root'));