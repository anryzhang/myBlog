/**
 * Created by anry on 2016/2/19.
 */
var CommentList = React.createClass({
    render:function(){
        "use strict";
        var commentNodes = this.props.data.map(function(comment){
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
})