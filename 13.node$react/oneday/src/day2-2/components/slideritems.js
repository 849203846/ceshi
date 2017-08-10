import React from 'react'

export default class SliderItems extends React.Component{
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