/**
 * Created by anry on 2016/2/18.
 */
var Comment = React.createClass({
    render:function(){
        "use strict";
        return (
            <div  className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
});
