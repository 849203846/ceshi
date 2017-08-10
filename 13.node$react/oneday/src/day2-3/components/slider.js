import React from 'react';
import './slider.less';
import SliderArrows from './sliderArrpws';
import SliderItems from './slideritems'
import SliderDots from "./sliderDots";
export default class Slider extends React.Component{
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
        if(index>this.props.images.length){
            this.sliders.style.transitionDuration='0s';
            this.sliders.style.left=0+'px';
            getComputedStyle(this.sliders,null).left
            this.sliders.style.transitionDuration='1s'
            index=1;
        }else if(index<0){
            this.sliders.style.transitionDuration='0s';
            this.sliders.style.left=this.props.images.length*-300+'px';
            getComputedStyle(this.sliders,null).left
            this.sliders.style.transitionDuration='1s';
            index=this.props.images.length-1
        }
        this.setState({index})//修改状态为最新的index值
    };
    componentDidMount(){
        if(this.props.autoplay){
            this.go()
        }
    }
    setSliders=(slider)=>{
        console.log(slider);
        this.sliders=slider
    }
    render(){
        return(
            <div
                onMouseOver={()=>clearInterval(this.timer)}
                onMouseOut={()=>this.go()}
                className="slider-wrapper"
            >
            <SliderItems setSliders={this.setSliders}
                         index={this.state.index}
                         images={this.props.images}
                         speed={this.props.speed}/>

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