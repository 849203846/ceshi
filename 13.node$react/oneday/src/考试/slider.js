import React from 'react'
import ReactDOM from 'react-dom'
import './slider.less';
let images=[
    {src:require('./images/1.jpg'),alt:'1.jpg'},
    {src:require('./images/2.jpg'),alt:'2.jpg'},
    {src:require('./images/3.jpg'),alt:'3.jpg'},
]

class SliderArrows extends React.Component{
    render(){
        return (
            <div className="arrows">
                <span className="arrow arrow-left" onClick={()=>this.props.turn(-1)}>&lt;</span>
                <span className="arrow arrow-right" onClick={()=>this.props.turn(1)}>&gt;</span>
            </div>
        )
    }
}

class SliderDots extends React.Component{
    render(){
        return(
            <div className="dots">
                {
                    this.props.images.map((image,index)=>(
                        <span
                            key={index}
                            className={' '+index==this.props.index?'bg':null }
                            onClick={()=>this.props.turn(index-this.props.index)}>
                 </span>
                    ))
                }
            </div>
        )
    }
}
class SliderItems extends React.Component{
    render(){
        let style={
            left:this.props.index*-300,
            width:this.props.images.length*300,
            transitionDuration:this.props.speed+'s'
        };
        return(
            <ul className="sliders" style={style}>
                {
                    this.props.images.map((image,index)=>(
                        <li className="slider"
                            key={index}><img
                            src={image.src}
                            alt={image.alt}/></li>
                    ))
                }
            </ul>
        )
    }
}

class Slider extends React.Component{
    constructor(){
        super();
        this.state={index:0}
    }
    go=()=>{
        this.timer=setInterval(()=>{
            this.turn(1)
        },this.props.delay*1000)
    };
    // 用来改变index的值 改变多少取决于step的值
    turn=(step)=>{
        let index=this.state.index; //先取得老的indeex值
        index+=step ;//加步长
        if(index>=this.props.images.length){
            index=0
        }else if(index<0){
            index=this.props.images.length-1
        }
        this.setState({index})//修改状态为最新的index值
    };
    componentDidMount(){
        if(this.props.autoplay){
            this.go()
        }
    }
    render(){
        return(
            <div
                onMouseOver={()=>clearInterval(this.timer)}
                onMouseOut={()=>this.go()}
                className="slider-wrapper"
            >
                <SliderItems index={this.state.index} images={this.props.images} speed={this.props.speed}/>

                <SliderArrows turn={this.turn} >

                </SliderArrows>
                <SliderDots
                    images={this.props.images}
                    index={this.state.index}
                    turn={this.turn} />
            </div>
        )
    }
}

ReactDOM.render(<Slider
    speed={1.2}
    delay={1.5}
    autoplay={true}
    arrows={true}
    dots={true}
    images={images}
    pause={true}
/>,document.querySelector('#root'));