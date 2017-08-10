import React from 'react'
import ReactDOM from 'react-dom'
/**
 * this.props.children 代表当前组件的子元素
 */
// {/*{this.props.children}代表使用的时候传入的子元素*/}
class Wrapper extends React.Component{
    render(){
        return (
            <div style={{border:'1px dashed red'}}>
                {this.props.children}

            </div>
        )
    }
}


        ReactDOM.render(<Wrapper>
<span>hello</span>
<span>hello</span>
<span>hello</span>
<span>hello</span>
<span>hello</span>
        </Wrapper>,document.querySelector('#root'))