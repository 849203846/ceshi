// // react是核心库(设计房子） reactDom是跟dom操作相关的库（盖房子）
// import React from 'react';
// import ReactDOM from 'react-dom';
// // render 渲染的 意思
// // 把一个h1标签添加到root这个dom元素的内部
// // react 对js做了扩展 react使用了自己的扩展的jsx语法 javascript+xml（html）这是一种可以让html和js混合书写的一种语法
// // xml可以定义自己的标签
// ReactDOM.render(<h1>hello</h1>,document.querySelector('#root'));
//
// /**
//  * <h1>hello</h1>
//  * 可不是简单的html.react的元素
//  * 元素是勾成这个事件的基本单位
//  * react元素也是构建react应用的基本最小单位
//  * 每一个html标签都是一个react元素
//  * react元素描述了界面的显示的样子
//  * react元素并不是真实的 dom元素
//  *
//  */
//
//

// import './考试/slider1'




import React from 'react'
import ReactDOM from 'react-dom'

class ProductCategoryRow extends React.Component {
    render() {
        return <tr><th colSpan="2">{this.props.category}</th></tr>;
    }
}

class ProductRow extends React.Component {
    render() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}


var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('container')
);