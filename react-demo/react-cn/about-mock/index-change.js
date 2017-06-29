/**
 * Created by broszhu on 2017/6/28.
 */


const oContent=document.getElementById("content");
const PRODUCTS = [
    {category: '体育用品', price: '$49.99', stocked: true, name: 'Football'},
    {category: '体育用品', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: '体育用品', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: '数码产品', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: '数码产品', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: '数码产品', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const SearchBar=React.createClass({
    handleChangeFn:function () {
        this.props.userTrigger(
            this.refs.filterTextInput.value,
            this.refs.filterCheckedInput.checked
        )
    },
    render:function () {
        return(
            <div>
                <input type="text" placeholder="请输入您要搜索的产品" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChangeFn}/>
                <div>
                    <label htmlFor="search_checked">
                        <input type="checkbox" id="search_checked" checked={this.props.filterChecked} ref="filterCheckedInput" onChange={this.handleChangeFn}/>
                        <span>仅显示有货的产品</span>
                    </label>
                </div>
            </div>
        )
    }
});

const SearchBody=React.createClass({
    render:function () {
        const self=this;
        const handleTdFn=function () {
            let initTr=[];
            let lastCategory=null;
            let isStocked='';
            self.props.product.forEach(function(product){
                //如果不含有搜索词 或者 checked不同的 移除
                if((product.name.indexOf(self.props.filterText)==-1)||(!product.stocked&&self.props.filterChecked)){
                    return
                }

                if(product.category!=lastCategory){
                    initTr.push(<CategoryName product={product} key={product.category}/>);
                    lastCategory=product.category;
                }
                isStocked=product.stocked==true?'':"red";
                initTr.push(<tr key={product.name}><td style={{"color":isStocked}}>{product.name}</td><td>{product.price}</td></tr>)
            });
            return initTr;
        };
        return(
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>名称</th>
                        <th>单价</th>
                    </tr>
                    </thead>
                    <tbody>{handleTdFn()}</tbody>
                </table>
            </div>
        )
    }
});
const CategoryName=React.createClass({
    render:function () {
        return(
            <tr><td colSpan='2'>{this.props.product.category}</td></tr>
        )
    }
});


const FilterProductTable=React.createClass({
    getInitialState:function () {
        return({
            filterText:"",
            filterChecked:false
        })
    },
    handleUserTrigger:function (filterText,filterChecked) {
        console.log(filterText,filterChecked);
        this.setState({
            filterText:filterText,
            filterChecked:filterChecked
        })
    },
    render:function () {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    filterChecked={this.state.filterChecked}
                    userTrigger={this.handleUserTrigger}
                />
                <SearchBody
                    product={this.props.products}
                    filterText={this.state.filterText}
                    filterChecked={this.state.filterChecked}
                />
            </div>
        )
    }
});


ReactDOM.render(<FilterProductTable products={PRODUCTS}/>,oContent);
