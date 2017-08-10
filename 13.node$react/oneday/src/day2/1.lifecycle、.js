import React from 'react'
import ReactDOM from 'react-dom'

/**
 *  什么叫生命周期函数
 *  gitDefaultProps 获取默认属性对象
 *  gitinitalState获得初始状态
 *  componentWillMount 组件将要挂载
 */

class ChildCounter extends React.Component{

    render(){
        return (
            <div>{this.props.number}</div>
        )
    }
    componentWillReceiveProps(newProps){
        //组件将要接受到伏组件传过来新的属性
        console.log(newProps);
        console.log('属性值发生改变的时候（被父级改变）');
    }
}

class Counter extends React.Component{
    // 1.获取默认属性对象
    static defaultProps={
        name:'父计数器'
    };
    // 2. 定义一个初始状态
    constructor(){
        super();
        this.state={number:0}
    }
    // 3.componentWillMount组件将要挂载
    componentWillMount(){
        // 可以在这个方法里初始化一下render的时候的数据
        console.log('组件将要挂载')
    }

    handleClick=()=>{
    // 所有的实例能够共享的公共方法
     this.setState({number:this.state.number+1})
}
    killMySelf=()=>{
        ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
    }
    shouldComponentUpdate(newProps,newState){
        // 6组件是否需要更新 返回布尔值 如果是true 就更新 返回false就不会更新
        // newProps,新的属性对象
        // newState新的状态对象
        if(newState.number%5===0){
            return true
        }else{
            return false
        }

    }
    // 7.组件将要更新
    componentWillUpdate(){
        console.log('7.组件将要更新');
    }
    componentDidUpdate(){
        console.log('8.更新完成');
    }
    // 4.把一个虚拟的DOM元素转换成真实的DOM元素的过程
    render(){
        console.log('把组件挂在到页面中');
        return (
            <div >
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+++++++++++++++</button>
                <button onClick={this.killMySelf}>自杀</button>
                <ChildCounter number={this.state.number} />
            </div>
        )
    }
    // 5.组件挂在完成后
    componentDidMount(){
        // 当你需要操作DOM元素的时候需要在这写
        console.log('组件挂载完成后');
    }
    componentWillUnmount(){
        // 组件将要被卸载
        console.log('组件将要被卸载')
    }

}

ReactDOM.render(<Counter/>,document.querySelector('#root'));