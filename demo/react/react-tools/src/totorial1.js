/**
 * Created by anry on 2016/2/18.
 */


var CommentBox = React.createClass({
    render:function(){
        return (
            <div className="commentBox">
                hello , world
            </div>
        );
    }
});


React.render(
    <CommentBox />,
    document.getElementById('J_comment')
);
