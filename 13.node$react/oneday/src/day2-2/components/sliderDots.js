import React from 'react'
export default class SliderDots extends React.Component{
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