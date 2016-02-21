/**
 * Created by anry on 2016/2/19.
 */

var CommentBox = React.createClass({
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
        <div className="commentBox">
            <h1>comments</h1>
            <CommentList data={this.state.data} />
            <CommentForm />
            </div>
    }
})