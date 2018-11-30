### 组件的状态，可以做到类似AJAX一样的局部更新；

演示代码如下：

	<script type="text/babel">
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
	
	    //3、配置组件 (用wrapStyle 不用 wrap-style )
	    let ReactPageUtility=<PageUtility name="zhu" style="red" link="https://www.baidu.com/" wrapStyle="page-wrap"/>;//
	
	    //4、组件的DOM渲染
	    ReactDOM.render(ReactPageUtility,oExp);
	</script>

核心代码是下面这些

	    let LinkBtn=React.createClass({
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

除了 render 外，getInitialState也是不能更改的一个参数；（都是React.createClass的参数，已{}传的）

在 getInitialState 中 配置了 默认属性（Object形式）；

- this.state == getInitialState中 return 的对象；