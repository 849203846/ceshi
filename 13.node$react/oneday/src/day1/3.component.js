/**
 * 组件
 * 什么是组件
 *
 * 组件和元素的区别 和联系是什么
 * 如何定义组件
 */
// 1.什么是组件
//     1.1组成页面的部分
//     1.2组件可复用 ，可嵌套
import React from 'react'
import ReactDOM from 'react-dom'
// \hello 类继承React.Component
// React.Component是一个基类
// 1，组件的名字必须是大写字母开头,是为了区分react元素和组件
// 2.组件内有render方法 返回一个顶级react元素
// 3.组件的用法和react元素基本一样
class Hello extends React.Component{
    //1 render方法用来指定次组件长什么样子
    // 2 必须返回一个顶级且只能返回一个react顶级元素
    render(){
    return <div style={{fontSize:'60px',color:'red',margin:'80px 580px'}}>hello</div>
}
    
}

/**如何渲染成功的呢？
 * 1.实例化Hello实例 let hello=new Hello()
 * 2.调用实例上的render方法 let ele=hello.render()
 * 3.把这个ele转成真是的dom元素并且插入到页面中去
 */
ReactDOM.render(<div><Hello/><Hello/></div>,document.querySelector('#root'));


