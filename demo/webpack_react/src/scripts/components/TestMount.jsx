/**
 * Created by ziyu on 16/3/17.
 */

import React from 'react';

const TestMount = React.createClass({
    getDefaultProps() {
        return {
            name: 'test mount'

        };
    },

    getInitialState() {
        return {
            opacity: 1.0,
            isAnimate: true
        };
    },
    componentDidMount() {
        this.timer = setInterval(function () {
            let opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0
            }
            this.setState({
                opacity: opacity,
                name: this.props.name + 'ing'
            });

        }.bind(this), 100);
    },
    cleanTimer(){


        if (this.state.isAnimate) {
            clearInterval(this.timer);

            this.setState({
                isAnimate: false,
                name: this.props.name
            });
        } else {
            this.componentDidMount();
            this.setState({
                isAnimate: true
            });

        }

    },

    render() {
        var text = this.state.name;
        return (

            <div style={{opacity:this.state.opacity}} onClick={this.cleanTimer} className='test'>
                { text}
            </div>
        );
    }
});

export default TestMount;
