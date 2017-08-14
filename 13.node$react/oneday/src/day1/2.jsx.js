// 详细了解ejs语法的使用 以及使用react元素和dom元素的写法的区别
/**
 *
 * 1.把这一个数组中的每一个元素ul中的li
 * 2.背景色为浅蓝色
 * 3.字体颜色为红色
 *
 */
// react不管有没有用到都要引进来
import React from 'react'
import ReactDOM from 'react-dom'
let names=['科杰','冷锋','楚瞧','科杰','冷锋','楚瞧'];
/**
 * 1.在我们的js里面可以直接写html代码，凡是<开头的 就是html代码
 * 2.在html中可以显示js变量 但是需要用{}包裹起来，里面其实放的是js表达式js表达式一定需要有返回值
 *3.给react元素添加属性的方式就是
 * 4.react元素和html标签使用上的一些差异
 *      4.1.如果给元素增加类名，不能使用class  需要使用classname
 *      4.2.给元素增加行内样式.style 需要等于一个对象
 *      4.3.如果箭头后面是大括号 里面需要用return 进行返回 如果是小括号 则不需要用return
 *
*/

ReactDOM.render(<ul>
    {
        names.map((item,index)=>
            <li key={index} className={index%2===1?'bg1':'bg2'} style={{color:'red',fontSize:'50px',listStyle:'none'}}>
                {item}
            </li>
        )
    }
</ul>,document.querySelector('#root'));