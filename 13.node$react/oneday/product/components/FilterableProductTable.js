import React from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default class FilterProductTable extends React.Component{
    constructor(){
        super();
        // 过滤的文本 只显示有存货的
        this.state={filterText:'',onlyShowStocked:false}
    }
    changeFilterText=(filterText)=>{
        this.setState({filterText})
    };
    clockonlyShowStocked=(onlyShowStocked)=>{
        this.setState({onlyShowStocked})
    };
  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <SearchBar
              clockonlyShowStocked={this.clockonlyShowStocked}
              changeFilterText={this.changeFilterText}
              filterText={this.state.filterText}
              onlyShowStocked={this.state.onlyShowStocked}
          />
        </div>
        <div className="panel-body">
          <ProductTable

              filterText={this.state.filterText}
              onlyShowStocked={this.state.onlyShowStocked}
              products={this.props.products}/>
        </div>
      </div>
    )
  }
}