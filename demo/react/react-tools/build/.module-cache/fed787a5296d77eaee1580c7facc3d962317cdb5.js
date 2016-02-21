/**
 * Created by anry on 2016/2/19.
 */
var CommentList = React.createClass({displayName: "CommentList",
    render:function(){
        "use strict";
        var commentNodes = this.props.data.map(function(comment){
            return (
                React.createElement(Comment, {author: comment.author}, 
                    comment.text
                )
            );
        });
        return (
            React.createElement("div", {className: "commentList"}, 
                commentNodes
            )
        );
    }
})