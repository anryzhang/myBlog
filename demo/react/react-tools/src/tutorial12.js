/**
 * Created by anry on 2016/2/19.
 */

var CommentBox = React.createClass({
    getInitialState:function(){
        "use strict";
        return {data:[]};
    },
    render:function(){
        "use strict";
        return (
            <div className="commentBox">
                <h1>comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        )
    }
})