## 传统的写法

    let HelloMessage = React.createClass({
        render: function() {
            return <h1>Hello {this.props.name}</h1>;
        }
    });
    
    ReactDOM.render(
            <HelloMessage name="hello" />,
        document.getElementById('example')
    );


不过这种写法，并不利于理解React；

推荐下面的写法.

    //1、获取目标DOM
    let oExp=document.getElementById('example');
    
    //2、写组件
    let HelloVisitors=React.createClass({
        render:function () {
            return <h2 className={this.props.style}>hello {this.props.name}</h2>
        }
    });
    
    //3、配置组件
    let ReactHello=<HelloVisitors name="zhu" style="red"/>;//
    
    //4、组件的DOM渲染
    ReactDOM.render(ReactHello,oExp);


这也就是一个组件的所必须的了

- 1、获取目标DOM
- 2、写组件
- 3、配置组件
- 4、组件的DOM渲染

React的多组件，也是一样的套路；如下

    //1、获取目标DOM
    let oExp=document.getElementById('example');
    
    //2、写组件
    let PageUtility=React.createClass({
        render:function () {
            //多行的时候，return后面用()可以包为一个整体，()提高优先级
            return(
                    <div className={this.props.wrapStyle}>
                        <HelloVisitors name={this.props.name} style={this.props.style}/>
                        <PageLink link={this.props.link}/>
                    </div>
            )
        }
    });
    
    let HelloVisitors=React.createClass({
        render:function () {
            return <h2 className={this.props.style}>hello {this.props.name}</h2>
        }
    });
    let PageLink=React.createClass({
        render:function () {
            return <a href={this.props.link}>{this.props.link}</a>
        }
    });
    
    //3、配置组件 (用wrapStyle 不用 wrap-style )
    let ReactPageUtility=<PageUtility name="zhu" style="red" link="https://www.baidu.com/" wrapStyle="page-wrap"/>;//
    
    //4、组件的DOM渲染
    ReactDOM.render(ReactPageUtility,oExp);

