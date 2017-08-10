import React from 'react'
export default class SliderDots extends React.Component{
    render(){
    return(
     <div className="dots">
         {
             this.props.images.map((image,index)=>(
                 <span
                     key={index}
                     className={' '+index==this.props.index||(index==0&&this.props.index==this.props.images.length)?'bg':null }
                     onClick={()=>this.props.turn(index-this.props.index)}>
                 </span>
             ))
         }
     </div>
    )
}
}