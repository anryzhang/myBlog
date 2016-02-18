/**
 * Created by anry on 2016/2/19.
 */
var CommentBox = React.createClass({displayName: "CommentBox",
    render:function(){
        "use strict";
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "comments"), 
                React.createElement(CommentList, {data: this.props.data}), 
                React.createElement(CommentForm, null)
            )
        );
    }
});

React.render(
    React.createElement(CommentBox, {data: data}),
    document.getElementById('J_content')
);