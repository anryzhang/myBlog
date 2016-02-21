/**
 * Created by anry on 2016/2/19.
 */
var converter = new Showdown.converter();
var Comment = React.createClass({
    render:function(){
        "use strict";
        var rawMarKup = converter.makeHtml(this.props.children.toString());
        return (
            <div className="comment">
                <h2>
                    {this.props.author}
                </h2>
            </div>
        )
    }
})