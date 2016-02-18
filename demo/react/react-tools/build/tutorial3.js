/**
 * Created by anry on 2016/2/18.
 */
var commentBox = React.createClass({displayName: "commentBox",
    render:function(){
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "comment box"), 
                React.createElement(CommentList, null), 
                React.createElement(CommentForm, null)
            )
        );
    }
});
