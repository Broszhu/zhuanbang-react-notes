var targetDom=document.getElementById("example");
var user={
    firstName:"朱",
    lastName:"安邦",
    avatar:"http://wx.qlogo.cn/mmopen/kibRcib7sMeXvw2EATWoqI3UHjBod67ics3nMnlShQ2vPoria66llzQfIiaE2HHCaYDWQibZ4SReibBug2ddVBA4RXq2XzG8YFn9W0X/0"
};

//网站欢迎语
ReactDOM.render(sayHello(user),targetDom);
function sayHello(user){
    if(user){
        return <h1>
                    hello , {formatName(user)}!
                    <img className="test-class" src={user.avatar} width="64"/>
               </h1>
    }else{
        return <h1>hello , 游客</h1>
    }
}
function formatName(user){
    return user.firstName +"" +user.lastName;
}

//React的变量用大驼峰，属性用小驼峰；





//console.warn(React);//14 function 1 attr
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

 //console.error(ReactDOM);//5个方法，1个属性
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