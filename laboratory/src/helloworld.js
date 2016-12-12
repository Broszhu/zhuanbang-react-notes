var targetDom=document.getElementById("example");
//creatClass的用法
var CommentBox=React.createClass({
    render:function(){
        return (
            <div class="commentBox">
                hello,react  I am a creatClass bulid.
            </div>
        )
    }
});
//ReactDOM.render(<CommentBox />,targetDom);

//createElement的用法
var ceratReactDom=React.createElement("h1",null,"hello react");
//ReactDOM.render(ceratReactDom,targetDom);//第一个参数的HTML，第二个的原生的DOM

//createElement的第二中用法
var CommentBox2 = React.createClass({displayName: 'CommentBox',
    render: function() {
        return (
            React.createElement('div', {className: "commentBox",id:"ddddd"}, "Hello, world! I am a CommentBox222.")
        );
    }
});
var CommentList=React.createClass({
    render:function(){
        return (<div className="commentList">hello word  I am a CommentList</div>)
    }
});
var CommentForm=React.createClass({
    render:function(){
        return(<div className="commentForm">hello I am a CommentForm </div>)
    }
});
var CommentBox=React.createClass({
    render:function(){
        return(
            <div className="commentBox">
                <h1>Comments</h1>

                <CommentList />
                <CommentForm />
            </div>
        )
    }
});
var Comment=React.createClass({
    render:function(){
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        )
    }
});

ReactDOM.render(React.createElement(CommentBox2,null),targetDom);


















console.dir(React);//14 function 1 attr
/*
*
* Children
* Component
* DOM
* PropTypes
* PureComponent
* cloneElement
* createClass       创建组件
* createElement     创建元素
* createFactory
* createMixin
* isValidElement
* version //版本号 15.3.1
* __SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
* __SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
* __spread
* */
console.dir(ReactDOM);//5个方法，1个属性
/*
* findDOMNode
* render        实例化根组件，启动框架，注入标记到原始的DOM元素中;
* unmountComponentAtNode
* unstable_batchedUpdates
* unstable_renderSubtreeIntoContainer
*
* version
* */

//ReactDOM 模块暴露了 DOM 相关的方法， 而 React 保有被不同平台的 React 共享的核心工具 （例如 React Native）