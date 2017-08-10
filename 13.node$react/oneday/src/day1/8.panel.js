import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
//单项数据流 只能一级一级网上传
class PanelHead extends Component{
    render(){
        return (
            <div className="page-header">
                <span style={{color:this.props.color}}>
                    {this.props.head}
                    </span>

            </div>
        )
    }
}

class PanelBody extends Component{
    render(){
        return (
            <div className="panel-body">
                <span style={{color:this.props.color}}>
  {this.props.body}
  </span>
            </div>
        )
    }
}

class PanelFooter extends Component{
    render(){
        return (
            <div className="panel-footer">
                <span style={{color:this.props.color}}>
                    {this.props.footer}
                    </span>

            </div>
        )
    }
}

class Panel extends Component{
    constructor(){
        super();
        this.state={color:'black'}
    }
    switchColor=(color)=>{
        this.setState({color})
    }

    render(){
        return (
            <div  className="panel-default">
                <button className="btn btn-danger" onClick={()=>this.switchColor('red')}>红</button>
                <button className="btn btn-success" onClick={()=>this.switchColor('green')}>绿</button>
                <PanelHead  color={this.state.color} head={this.props.head}/>
                <PanelBody color={this.state.color} body={this.props.children}/>
                <PanelFooter  color={this.state.color}  footer={this.props.footer}/>
            </div>
        )
    }
}

let data={
    head:"头",
    footer:'尾'
}
ReactDOM.render(<div className="container">
    <div className="col-md-6 col-md-offset-6">
      <Panel head="头" footer="尾">体</Panel>
   {/*//   <Panel {...data}>体</Panel> //可以把对象展开赋给组件*/}
    </div>
</div>,document.querySelector('#root'));






















