/**
 * Created by anry on 2016/2/18.
 */


var CommentBox = React.createClass({displayName: "CommentBox",
    render:function(){
        return (
            React.createElement("div", {className: "commentBox"}, 
                "hello , world"
            )
        );
    }
});


React.render(
    React.createElement(CommentBox, null),
    document.getElementById('J_comment')
);
