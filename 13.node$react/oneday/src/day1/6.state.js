/**
 *  组件的状态
 *  什么是状态 状态就是一个组件内部自己初始化 只能由自己改变的数据
 *  状态对象也是组件实例的一个私有属性
 *  1.如何定义 或者初始化状态
 *  2.如何给react元素绑定事件
 *  3.如何修改组件状态
 *
 */
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 需要注意的事项 不是onclick 而是onClick
 * 注意this的问题
 * 如果是普通函数的话，
 *      绑定方法时候加bind
 *    用箭头函数在绑定方法那里加匿名箭头函数
 *    保存this let that=this 缓存this指针
 * 箭头函数 不用箭头函数
 *setState是异步的方法 所以不要在setState之后立马获取修改之后的状态对象、
 * 如果真的必要获取修改之后的状态对象
 */
class Cunter extends React.Component{
    constructor(){
        super();
        // 初始化状态对象
        this.state={number:2}
    }
    handleClick=()=>{
        // 如果是普通的函数 this是null
        //这样写 仅仅是能改变状态
      // this.state.number=this.state.number+1
      //   设置状态对象 1.改变状态 2.重新调用render方法进行渲染
      //   新状态对象会覆盖老状态对象 可不是覆盖掉 意味着 如果新状态对的属性老状态里没有 会添加此属性 如果哟的话会覆盖 如果老的有 新的没有 则保持不变
      //   setState后面函数里面不能调用setState

    this.setState({number:this.state.number+1},()=>{
        console.log(this.state.number);
    })

        this.setState((state)=>{
            this.setState({number:this.state.number+1},()=>{
                console.log(this.state.number);
            })

        })
}

    render(){
        return (
            <div>
                <p>{this.state.number+1}</p>
                <button onClick={this.handleClick}>+++++++++++++++++++++</button>
            </div>
        )
    }
}
ReactDOM.render(<Cunter/>,document.querySelector('#root'));