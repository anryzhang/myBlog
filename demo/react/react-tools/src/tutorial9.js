/**
 * Created by anry on 2016/2/19.
 */
var CommentBox = React.createClass({
    render:function(){
        "use strict";
        return (
            <div className="commentBox">
                <h1>comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm></CommentForm>
            </div>
        );
    }
});

React.render(
    <CommentBox data={data} />,
    document.getElementById('J_content')
);