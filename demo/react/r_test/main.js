/**
 * Created by ziyu on 2016/2/10.
 */

'use strict';


//var CommentBox = React.createClass({
// render: function() {
//   return (
//     <div className="commentBox">
//        hello world
//     </div>
//   );
// }
//});
//
//ReactDOM.render(
//    <CommentBox/>,
//    document.getElementById('content')
//);

var CommontBox = React.createClass({
    displayName:'CommontBox',
    render:function(){
        return (
            React.createElement('div',{className:"comment-box"},
            "hellow，world! I am a CommontBox"
            )
        );
    }
});

ReactDOM.render(
    React.createElement(CommontBox,null),
    document.getElementById('content')
);




