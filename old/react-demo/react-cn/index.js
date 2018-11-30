/**
 * Created by broszhu on 2017/6/28.
 */
const oExample=document.getElementById("example");
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hello:<p>hello <a href="http://baidu.com">222</a></p>
        }
    }
    render(){
        return(
            <div>
                {this.state.hello}
            </div>
        )
    }
}

ReactDOM.render(<App />,oExample);