import React,{Component} from 'react';
export default class SearchBar extends React.Component{

  render(){
    return (
      <form>
        <input placeholder="搜索...." type="text" className="form-control" value={this.props.filterText} onChange={(event)=>this.props.changeFilterText(event.target.value)} />
        <div className="checkbox">
          <label>
            <input type="checkbox" onClick={()=>this.props.clockonlyShowStocked(!this.props.onlyShowStocked)}  />只显示有存货的商品
          </label>
        </div>
      </form>
    )
  }
}