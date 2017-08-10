import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

/** 组件的属性 属性就是从那些外界传进来 组件内部只能读 不能改的数据
 *1.属性是什么 属性有什么*
 * 2.如何传递进来*
 * 3.在组件内部如何读取属性对象*
 * 4.如何设置默认属性*
 * 5.如何设置属性名称的类型的检查*
 */
class Person extends React.Component{
    static defaultProps={
        gender:'女' //定义组件的默认属性
    };
    static propTypes={
    // 设置组件属性的名称和类型
      name:React.PropTypes.string.isRequired,
      gender:React.PropTypes.oneOf(['男','女']).isRequired
        // 值必须穿并且是字符串
    };
    //检查参数的名称和类型
    constructor(props){//props=｛name:zhagsan,gender:nan｝
        super(props);//super就代表父类的构造函数
    }
    render(){
      return(
          <div>
            <p>姓名:{this.props.name} </p>
            <p>性别：{this.props.gender} </p>
        </div>
      )
    }
}

/**
 * 1.先把使用组件的属性拼成对象｛name:zhagsan,gender:nan｝
 * 2.把这个属性对象传进person的构造函数 从而得到person的实例
 */

ReactDOM.render(<Person name="张三" gender="男"/>,document.querySelector('#root'));












