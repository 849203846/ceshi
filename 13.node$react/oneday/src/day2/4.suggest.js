/**
 * 1.react如何跟后逃进行交互
 * 1.给input绑定值改变事件
 * 当事件发生的时候 取得input的值 然后调用百度接口取得
 **/

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery/dist/jquery'
class Suggest extends React.Component{
    constructor(){
        super();
        this.state={words:[],index:-1}; //定义初始的状态对象 定义一个默认的状态index\
        this.wd=''
    }
    handleKyeDown=(event)=>{
        let wd=event.target.value; //取得输入框的值
        this.wd=wd;//把输入的关键字保存到当前实例的自定义wd属性上
        //一般来说 如果这个数据是用来渲染页面的保存到状态里 好如果这个数据不需要来渲染页面 可以暂存到实例上
$.ajax({
    url:'http://www.baidu.com/su',//请求的后台路径
    type:'GET',
    dataType:'jsonp', //指定返回的类型是jsonp类型 的
    data:{wd},//数据对象 如果是get请求 则会把wd放在url查询字符串里面
    jsonp:'cb',//在后台获取方法名的参数名，
    success:(response)=>{
        //改变状态之后需要重新渲染
        this.setState({words:response.s,index:-1})
    }
})

}
    handleKeyDown=(event)=>{
        let keyCode=event.keyCode//先取到按键的编码
        if(keyCode==40||keyCode==38){
            let index=this.state.index;
            if(keyCode==40){
               index++;
               if(index>=this.state.words.length){
                   index=-1
               }
            } else if(keyCode==38){
                index--;
                if(index<-2){
                    index=this.state.words.length-1
                }
            }
            this.setState({index})
        }
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <input
                                    type="text"
                                    value={this.state.index==-1?this.wd:this.state.words[this.state.index]}
                                    onKeyDown={this.handleKeyDown}
                                    onChange={this.handleKyeDown}
                                    className="form-control"/>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {this.state.words.map((item,index)=>(
                                            <li className={"list-group-item   "+(index==this.state.index?'active':'')} key={index}>
                                                {item}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Suggest/>,document.querySelector('#root'))