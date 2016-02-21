/**
 * Created by anry on 2016/2/18.
 */
var CommentList = React.createClass({displayName: "CommentList",
    render:function(){
        return (
            React.createElement("div", {className: "commentList"}, 
                React.createElement(Comment, {author: "pete hunt"}, "This is one comment")
            )
        );
    }
});


