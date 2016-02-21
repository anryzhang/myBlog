/**
 * Created by anry on 2016/2/19.
 */
var converter = new Showdown.converter();
var Comment = React.createClass({displayName: "Comment",
    render:function(){
        "use strict";
        var rawMarKup = converter.makeHtml(this.props.children.toString());
        return (
            React.createElement("div", {className: "comment"}, 
                React.createElement("h2", null, 
                    this.props.author
                )
            )
        )
    }
})