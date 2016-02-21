/**
 * Created by anry on 2016/2/18.
 */
var Comment = React.createClass({displayName: "Comment",
    render:function(){
        "use strict";
        return (
            React.createElement("div", {className: "comment"}, 
                React.createElement("h2", {className: "commentAuthor"}, 
                    this.props.author
                ), 
                this.props.children
            )
        );
    }
});
