import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import FilterableProductTable from "./components/FilterableProductTable";

let products = [
  {category: "运动类", price: "$49.99", stocked: true, name: "足球"},
  {category: "运动类", price: "$9.99", stocked: true, name: "棒球"},
  {category: "运动类", price: "$29.99", stocked: false, name: "篮球"},
  {category: "电子类", price: "$99.99", stocked: true, name: "iPod"},
  {category: "电子类", price: "$399.99", stocked: false, name: "iPhone 5s"},
  {category: "电子类", price: "$199.99", stocked: true, name: "iPhone 8"}
];
ReactDOM.render(
<div className="container" style={{marginTop:15}}>
  <div className="row">
    <div className="col-md-8 col-md-offset-2">
      <FilterableProductTable products={products}/>
    </div>
  </div>
</div>,document.querySelector('#root'));