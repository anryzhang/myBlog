/**
 * Created by ziyu on 16/3/16.
 */

import React from 'react';

const MyForm = React.createClass({
    getInitialState() {
        return {
            value: 'hello',
            userInput:''
        };
    },
    handleChange(event) {
        this.setState({
            value: (function(){
                var str = event.target.value;
                if(str.length >20){
                    alert('最多输入20字');
                }
                return str.substr(0,20);
            })()
        })
    },
    handleClick(){
      //this.refs.myTextInput.getDOMNode().focus();
        this.setState({
          userInput:this.refs.myTextInput.value.trim()
        },function(){
            this.refs.myTextInput.focus();
        });

    },
    handleChangeUserInput(event){
        this.setState({
          userInput:event.target.value.substr(0,10)
        });

    },
    componentDidMount() {
      //React.findDOMNode(this.refs.myTextInput).focus();
        this.refs.myTextInput.focus();
    },


    render() {
        const value = this.state.value;
        return (
            <div>
                <div style={{'padding':'10px'}}>
                    <input type="radio" name="opt" defaultChecked /> radio1
                    <input type="radio" name='opt' /> radio2
                </div>

                <input type="text" value={value} onChange={this.handleChange}/>
                <span>最多20字</span>
                <br/>
                <select name="se" id="J_se" defaultValue="03">
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                </select>

                <div style={{'padding':'10px'}}>
                    <input type="text" onChange={this.handleChangeUserInput} value={this.state.userInput} ref='myTextInput'/>
                    <input type="button" value='focus the text input' onClick={this.handleClick}/>
                </div>
            </div>
        );
    }
});

export default MyForm;
