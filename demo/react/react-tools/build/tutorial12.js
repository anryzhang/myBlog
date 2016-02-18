/**
 * Created by anry on 2016/2/19.
 */

var CommentBox = React.createClass({displayName: "CommentBox",
    getInitialState:function(){
        "use strict";
        return {data:[]};
    },
    render:function(){
        "use strict";
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "comments"), 
                React.createElement(CommentList, {data: this.state.data}), 
                React.createElement(CommentForm, null)
            )
        )
    }
})