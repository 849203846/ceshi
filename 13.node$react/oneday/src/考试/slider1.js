import React from 'react';
import ReactDOM from 'react-dom';
import './slider.less';
let images=[
    {src:require('./images/1.jpg')},
    {src:require('./images/2.jpg')},
    {src:require('./images/3.jpg')}
];
class SliderDots extends React.Component{
    render(){
        return(
            <ul className="dots">
                {
                    this.props.images.map((image,index)=>(
                        <span
                            key={index}
                            className={index==this.props.index?'bg':null}
                            onClick={()=>this.props.turn(index-this.props.index)}
                        >

                        </span>
                        )
                    )
                }
            </ul>
        )
    }
}
class SliderArrow extends React.Component{
    render(){
        return(
            <div className="arrows">
                <span className="arrow arrow-left" onClick={()=>this.props.turn(-1)}>

                </span>
                <span className="arrow arrow-right" onClick={()=>this.props.turn(1)}>

                </span>
            </div>
        )
    }
}
class SliderItem extends  React.Component{
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
                        <li key={index} className="slider">
                            <img src={image.src} alt=""/>
                        </li>
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
    turn=(step)=>{
        let index=this.state.index;
        index+=step;
        if(index<0){
            index=this.props.images.length-1;
        }else if(index>this.props.images.length){
            index=0
        }
        this.setState({index})

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
                    className="slider-wrapper">

                    <SliderItem
                    images={this.props.images}
                    index={this.state.index}
                    speed={this.props.speed}
                    />
                    <SliderDots
                        index={this.state.index}
                        turn={this.turn}
                        images={this.props.images}
                    />
                    <SliderArrow
                    turn={this.turn}
                    />
                </div>
            )
        }

}
ReactDOM.render(<Slider
speed={1.2}
autoplay={true}
images={images}
delay={1.2}
/>,document.querySelector('#root'));