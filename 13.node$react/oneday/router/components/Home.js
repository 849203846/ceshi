import React,{Component} from 'react'
export default class Home extends Component{
    /**
     * 如果一个组件是由route渲染出来的会向这个组件传入三个属性
     * history 用来管里路径的
     * location位置就是路径
     * match 匹配 路由的路径和url匹配的结果
     *
     *      利用箭头函数父传子组件
     *     {...props}
     * @returns {XML}
     */
    render(){
        return(
            <div>Home</div>
        )
    }
}