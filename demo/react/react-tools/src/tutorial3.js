/**
 * Created by anry on 2016/2/18.
 */
var commentBox = React.createClass({
    render:function(){
        return (
            <div className="commentBox">
                <h1>comment box</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});
