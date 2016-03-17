/**
 * Created by ziyu on 16/3/16.
 */


import React, {Component, PropTypes} from 'react'

class Page3 extends React.Component {

    render() {
        const style = {
            color: 'green',
            fontSize: '14px',
            padding: '0 14px'
        };
        return (
            <div className="page3">
                <p data-id={this.props.id} data-name={this.props.name}>
                    {this.props.text}
                    <span style={style}>{this.props.age}</span>
                </p>
                <Clicked  headerName={this.props.headerName} />
            </div>
        );
    }
}

Page3.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string
};
Page3.defaultProps = {
    text: 'test data defaultProps',
    id: 123,
    liked: false,
    isShow:true
};

//组件
const Clicked = React.createClass({
    getInitialState() {
        return {
            liked: false,
            count:0
        };
    },
    onClick(event){
        console.log(event);
        this.setState({
            liked:!this.state.liked,
            count:this.state.count + 1
        });


    },


    render() {
        const text = this.state.liked ? 'liked' : 'not liked';
        const isHide = !this.state.liked ? 'block' : 'none';
        const className = !this.state.liked ? 'active' : '';
        const isStyle = {
            display:isHide
        };
        const isShow = this.state.isShow ? 'hide' : 'show';

        const style = {
            border:'1px solid ' + (className ? 'green' : '#ccc'),
            width:'120px',
            height:'30px',
            lineHeight:'30px',
            textAlign:'center',
            fontSize:'12px',
            borderRadius:'5px',
            cursor: 'pointer',
            color:(className ? 'green' : '#ccc')
        };
        return (
            <div >
                <div>{this.props.headerName} 点击次数 {this.state.count}</div>
                <div className="cont" style={isStyle} >test {isShow} cont</div>
                <p className={className} style={style} onClick={this.onClick}>
                    you {text}
                </p>
            </div>
        );
    }
});


export default Page3;

