import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './components/slider'

let images=[
    {src:require('./images/1.jpg'),alt:'1.jpg'},
    {src:require('./images/2.jpg'),alt:'2.jpg'},
    {src:require('./images/3.jpg'),alt:'3.jpg'},
]

// speed 每次轮播的速度
// delay每隔多长时间轮播一次
// autuplay是否启动自动轮播
// arrows 是否显示左右导航箭头
// dots 师傅显示底部点状导航按钮
// img 要轮播的玩玩图片
// pause当光标移动上去后是否自动暂停轮播



ReactDOM.render(<Slider
speed={1.2}
delay={1.5}
autoplay={true}
arrows={true}
dots={true}
images={images}
pause={true}
/>,document.querySelector('#root'));