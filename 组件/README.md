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

第三步的配置，其实也是可以写在组件里面的；其实相当于3步；

- 获取目标DEMO
- 写组件
- 组件的DOM渲染

	<script type="text/babel">
	    //1、获取目标DOM
	    let oExp=document.getElementById('example');
	
	    //2、写组件
	    let PageUtility=React.createClass({
			//getDefaultProps 是固定的配置 初识props方法(不能用别的方法名)
	        getDefaultProps:function () {
	            return {
	                name:"zhu",
	                style:"red",
	                link:"https://www.baidu.com/",
	                wrapStyle:"page-wrap",
	            }
	        },
	        render:function () {
	            //多行的时候，return后面用()可以包为一个整体，()提高优先级
	            return(
	                    <div className={this.props.wrapStyle}>
	                        <HelloVisitors name={this.props.name} style={this.props.style}/>
	                        <PageLink link={this.props.link}/>
	                        <LinkBtn link={this.props.link}/>
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
	    let LinkBtn=React.createClass({
			//getInitialState 是固定的配置初识状态方法
	        getInitialState:function () {
	            return {
	                liked:true
	            }
	        },
	        handClick:function (e) {
	            this.setState({liked: !this.state.liked});
	        },
	        render:function () {
	            let textFlag=this.state.liked ? "喜欢" :"不喜欢";
	            return (
	                    <p onClick={this.handClick}>
	                        您 <strong>{textFlag}</strong> 我，点我切换状态
	                    </p>
	            )
	        }
	    });
	
	    //3、组件的DOM渲染
	    ReactDOM.render(<PageUtility />,oExp);
	</script>


## 组件生命周期

组件的生命周期可分成三个状态：
- Mounting：已插入真实 DOM
- Updating：正在被重新渲染
- Unmounting：已移出真实 DOM

生命周期的方法有：
- componentWillMount 在渲染前调用,在客户端也在服务端。
- componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
- componentWillReceiveProps 在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
- shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
可以在你确认不需要更新组件时使用。
- componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
- componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
- componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。
 
这些方法的详细说明，可以参考官方文档。 https://facebook.github.io/react/docs/react-component.html