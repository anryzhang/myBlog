/**
 * Created by ziyu on 16/3/16.
 */

import React from 'react';

import $ from 'jquery';


const MyAjax = React.createClass({
    getDefaultProps() {
        console.log('dp');
      return {
        users:[]
      };
    },
    propTypes: {
      users: React.PropTypes.array.isRequired
    },
    

    getInitialState() {
        console.log('is');
        return {
            username: '',
            userUrl: '',
            users: []
        };
    },
    componentWillMount() {
        console.log('cwm');
      $.get(this.props.url,function(res){
          "use strict";
          var lastData = res;
          this.setState({
            users:lastData
          });

      }.bind(this))
    },

    componentDidMount() {
        console.log('cdm');
        $.get(this.props.url, function (res) {
            //var lastData = res[0];
            var _self = this;
            var lastData = res;
            if (this.isMounted()) {
                this.setState({
                    users: (function(){
                        if(res){
                          return  _self.state.users.concat(res);
                        }
                    })()
                });

            }
        }.bind(this));
    },
    onClick (e){
        e.preventDefault();

        console.log(this.getDOMNode());
    },
    render() {
        var self = this;
        return (
            <div className='list-box'>
                {
                    this.state.users.map(function (item, key) {
                        return <RenderList  handleClick={self.onClick}  key={key} res={item}/>
                    })
                }

            </div>

        );
    }
});

const RenderList = React.createClass({
    render() {
        var res = this.props.res;
        return (
            <div className="list-item">

                <span onClick={this.props.handleClick} style={{padding:'0 10px'}}>{res.owner.login}</span>
                <a href={res.html_url}>{res.html_url}</a>

            </div>

        );
    }
});


export default MyAjax;
