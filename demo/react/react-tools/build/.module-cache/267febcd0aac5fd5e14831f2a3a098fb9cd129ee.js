/**
 * Created by anry on 2016/2/19.
 */
var converter = new Showdown.converter();

var Comment = React.createClass({displayName: "Comment",
    render:function(){
        "use strict";
        return(
            React.createElement("div", {className: "comment"}, 
                React.createElement("h2", {className: "commentAuthor"}, 
                    this.props.author
                ), 
                converter.makeHtml(this.props.children.toString())
            )
        );
    }
})