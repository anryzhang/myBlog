/**
 * Created by anry on 2016/2/19.
 */
var converter = new Showdown.converter();

var Comment = React.createClass({
    render:function(){
        "use strict";
        return(
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {converter.makeHtml(this.props.children.toString())}
            </div>
        );
    }
})