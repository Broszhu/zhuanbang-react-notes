/**
 * Created by broszhu on 2017/6/28.
 */


const oContent=document.getElementById("content");
const data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

const Comment=React.createClass({
    rawMarkup:function () {
        const md=new Remarkable();
        const rawMarkup=md.render(this.props.children.toString());
        return {__html:rawMarkup}
    },
    render:function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        )
    }
});

const CommentList=React.createClass({
    render:function () {
        const commentNode=this.props.data.map(function (comment) {
            return <Comment author={comment.author} key={comment.id}> {comment.text} </Comment>
        });
        return(
            <div className="comment-list">
                {commentNode}
            </div>
        )
    }
});

const CommentForm=React.createClass({
    getInitialState:function () {
        return {author:"",text:""}
    },
    handleAuthorChange:function (e) {
        this.setState({author:e.target.value})
    },
    handleTextChange:function (e) {
        this.setState({text:e.target.value})
    },
    handleSubmit:function (e) {
        e.preventDefault();
        const author=this.state.author.trim();
        const text=this.state.text.trim();
        if(!author || !text){
            alert("请填写您的名字和评论");
            return;
        }
        this.props.onCommentSubmit({author:author,text:author});
        this.setState({author:'',text:""})
    },
    render:function () {
        return(
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="请输入您的姓名" value={this.state.author} onChange={this.handleAuthorChange}/>
                <input type="text" placeholder="您的评论" value={this.state.text} onChange={this.handleTextChange}/>
                <input type="submit" value="提交"/>
            </form>
        )
    }
});


//全局组件
const CommentBox=React.createClass({
    getInitialState:function () {
        return {data:[]}
    },
    loadCommentsFromServer:function () {
        //ajax
        this.setState({data:data});
    },
    componentDidMount:function () {
        this.loadCommentsFromServer();
        // setInterval(this.loadCommentsFromServer,2000)
    },
    handleCommentSubmit:function (comment) {
        //ajax
        data.unshift(comment);
        this.setState({data:data});

    },
    render:function () {
        return (
            <div className="comment-box">
                <h1>CommentBox</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        )
    }
});

ReactDOM.render(<CommentBox />,oContent);
