/**
 * Created by broszhu on 2017/6/28.
 */


const oContent=document.getElementById("content");
const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const SearchBar=React.createClass({
    handleChange:function () {
        this.props.outUserInput(
            this.refs.filterTextInput.value,
            this.refs.inStockOnlyInput.checked
        )
    },
    render:function () {
        return(
            <form>
                <input type="text" placeholder="搜索" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange}/>
                <div>
                    <label for="search_input">
                        <input type="checkbox" id="search_input" checked={this.props.inStockOnly} ref='inStockOnlyInput' onChange={this.handleChange}/>
                        <span>排除缺货产品</span>
                    </label>
                </div>

            </form>
        )
    }
});

const ProductCategoryRow=React.createClass({
    render:function () {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>)
    }
});

const ProductRow=React.createClass({
    render:function () {
        const name=this.props.product.stocked ? this.props.product.name :
            <span style={{color:"red"}}>
                {this.props.product.name}
            </span>;
        return(
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
});

const ProductTable=React.createClass({
    render:function () {
        let rows=[];
        let lastCategory=null;
        const self=this;
        this.props.products.forEach(function (product) {
            if (product.name.indexOf(self.props.filterText) === -1 || (!product.stocked && self.props.inStockOnly)) {
                return;
            }
            if(product.category!= lastCategory){
                rows.push(<ProductCategoryRow category={product.category} key={product.category}></ProductCategoryRow>)
            }
            rows.push(<ProductRow product={product} key={product.name}></ProductRow>);
            lastCategory=product.category;
        });

        return(
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>单价</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>

            </table>
        )
    }
});

const FilterableProductTable=React.createClass({
    getInitialState:function() {
        return{
            filterText: '',
            inStockOnly: false
        }
    },
    handleUserInput:function (filterText,inStockOnly) {
        console.log(filterText,inStockOnly);
        this.setState({
            filterText:filterText,
            inStockOnly:inStockOnly
        })
    },
    render:function () {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    outUserInput={this.handleUserInput}
                />
                <ProductTable products={this.props.products}
                              filterText={this.state.filterText}
                              inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
});

ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>,oContent);
