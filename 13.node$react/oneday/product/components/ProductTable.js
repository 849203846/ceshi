import React,{Component} from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
export default class ProductTable extends React.Component{
  render(){
      let rows=[];
      let lastCategory;
      this.props.products.forEach( (product,index) =>{
          if(product.name.indexOf(this.props.filterText)==-1||(this.props.onlyShowStocked&&!product.stocked)){
              return
          }
      if(product.category!=lastCategory){
          rows.push(<ProductCategoryRow key={product.category} category={product.category} />);
          lastCategory=product.category
      }
          rows.push(  <ProductRow key={index} product={product}/>)
      });
    return (
      <table className="table table-bordered">
        <thead>
          <tr><th>名称</th><th>价格</th></tr>
        </thead>
        <tbody>
        {
         rows
        }
        </tbody>
      </table>
    )
  }
}