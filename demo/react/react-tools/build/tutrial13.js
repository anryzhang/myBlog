/**
 * Created by anry on 2016/2/19.
 */

var CommentBox = React.createClass({displayName: "CommentBox",
    getInitialState:function(){
        "use strict";
        return {data:[]};
    },
    componentDidMount:function(){
        "use strict";
        $.ajax({
            url:this.props.url,
            dataType:'json',
            success:function(rs){
                this.setState({data:rs});
            }.bind(this),
            error:function(xhr,status,err){

            }
        });
    }
    ,
    render:function(){
        "use strict";
        React.createElement("div", {className: "commentBox"}, 
            React.createElement("h1", null, "comments"), 
            React.createElement(CommentList, {data: this.state.data}), 
            React.createElement(CommentForm, null)
            )
    }
})