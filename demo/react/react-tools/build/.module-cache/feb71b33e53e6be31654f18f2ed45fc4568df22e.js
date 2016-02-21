/**
 * Created by anry on 2016/2/18.
 */
var CommentList = React.createClass({displayName: "CommentList",
    render:function(){
        return (
            React.createElement("div", {className: "commentList"}, 
                "hello world! I am a commentList"
            )
        );
    }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    render:function(){
        return (
            React.createElement("div", {className: "commentForm"}, 
                 "Hello world, i am a commentForm"
            )
        );
    }
});

