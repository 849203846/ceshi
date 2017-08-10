import React from 'react'

export default class SliderItems extends React.Component{
    componentDidMount(){
        let sliders=this.refs.slide;
        this.props.setSliders(this.refs.sliders)
    }
    render(){
        let style={
            left:this.props.index*-300,
            width:(this.props.images.length+1)*300+"px",
            transitionDuration:this.props.speed+'s'
        };
        return(
            <ul className="sliders" style={style} ref="sliders">
                {
                    this.props.images.map((image,index)=>(
                        <li className="slider"
                            key={index}><img
                            src={image.src}
                            alt={image.alt}/></li>
                    ))
                }
                <li className="slider" key={this.props.images.length}>
                    <img src={this.props.images[0].src} alt=""/>
                </li>
            </ul>
        )
    }
}