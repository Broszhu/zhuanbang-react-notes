# Props

有两种用法；

第一种：是使用组件的时候使用（不推荐）

    let oExp=document.getElementById('example');
    let HelloMsg=React.createClass({
        render:function () {
            return <h1>hello {this.props.name}</h1>
        }
    });
    ReactDOM.render(<HelloMsg name="props" />,oExp);

第二种：是卸载组件内部的；

    let oExp=document.getElementById('example');
    let HelloMsg=React.createClass({
        getDefaultProps:function () {
            return {
                name:"getDefaultProps"
            }
        },
        render:function () {
            return <h1>hello {this.props.name}</h1>
        }
    });
    ReactDOM.render(<HelloMsg />,oExp);

**state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。**

这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。

    //1、获取目标DOM
    let oExp=document.getElementById('example');

    //2、写组件
    let PageUtility=React.createClass({
        //getInitialState 和 getDefaultProps 是经常用的属性；
        getInitialState:function () {
            return{
                name:"zhu",
                style:"red",
                wrapStyle:"page-wrap",
                link:"https://www.baidu.com/",
            }
        },
        render:function () {
            //多行的时候，return后面用()可以包为一个整体，()提高优先级
            return(
                    <div className={this.state.wrapStyle}>
                        <HelloVisitors name={this.state.name} style={this.state.style}/>
                        <PageLink link={this.state.link}/>
                        <LinkBtn/>
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

    //3、组件的DOM渲染
    ReactDOM.render(<PageUtility />,oExp);

## Props 验证

Props 验证使用 propTypes，它可以保证我们的应用组件被正确使用，React.PropTypes 提供很多验证器 (validator) 来验证传入数据是否有效。

当向 props 传入无效数据时，JavaScript 控制台会抛出警告。

	React.createClass({
	  propTypes: {
	    // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的
	   optionalArray: React.PropTypes.array,
	    optionalBool: React.PropTypes.bool,
	    optionalFunc: React.PropTypes.func,
	    optionalNumber: React.PropTypes.number,
	    optionalObject: React.PropTypes.object,
	    optionalString: React.PropTypes.string,
	 
	    // 可以被渲染的对象 numbers, strings, elements 或 array
	    optionalNode: React.PropTypes.node,
	 
	    //  React 元素
	    optionalElement: React.PropTypes.element,
	 
	    // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
	    optionalMessage: React.PropTypes.instanceOf(Message),
	 
	    // 用 enum 来限制 prop 只接受指定的值。
	    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),
	 
	    // 可以是多个对象类型中的一个
	    optionalUnion: React.PropTypes.oneOfType([
	      React.PropTypes.string,
	      React.PropTypes.number,
	      React.PropTypes.instanceOf(Message)
	    ]),
	 
	    // 指定类型组成的数组
	    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
	 
	    // 指定类型的属性构成的对象
	    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
	 
	    // 特定 shape 参数的对象
	    optionalObjectWithShape: React.PropTypes.shape({
	      color: React.PropTypes.string,
	      fontSize: React.PropTypes.number
	    }),
	 
	    // 任意类型加上 `isRequired` 来使 prop 不可空。
	    requiredFunc: React.PropTypes.func.isRequired,
	 
	    // 不可空的任意类型
	    requiredAny: React.PropTypes.any.isRequired,
	 
	    // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
	    customProp: function(props, propName, componentName) {
	      if (!/matchme/.test(props[propName])) {
	        return new Error('Validation failed!');
	      }
	    }
	  },
	  /* ... */
	});