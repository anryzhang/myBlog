/**
 * Created by ziyu on 16/3/16.
 */

import React from 'react';

const setIntervalMixin = {
    componentWillMount() {
        this.intervals = [];
    },
    setInterval(){
        this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUpdate(nextProps, nextState) {
        this.intervals.map(clearInterval);
    }


};

const MyMixin = React.createClass({
    mixins: [setIntervalMixin],
    getInitialState() {
        return {
            seconds: 0
        };
    },
    componentDidMount() {
        this.setInterval(this.tick, 1000);
    },
    tick(){
        "use strict";
        this.setState({
            seconds: this.state.seconds + 1
        })
    },


    render() {
        return (
            <div>
                <p>
                    react has been running for {this.state.seconds} .
                </p>
            </div>
        );
    }
});

export default MyMixin;
