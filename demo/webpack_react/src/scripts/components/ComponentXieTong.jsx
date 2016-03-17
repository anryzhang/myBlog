/**
 * Created by ziyu on 16/3/17.
 */

import React from 'react';

const ComponentXieTong = React.createClass({
    getDefaultProps() {
        return {
            one: '123',
            two: 321
        };
    },

    render() {
        return (
            <div className='test'>
                <h2>组件协同</h2>
                <p>{this.props.one}</p>
                <p>{this.props.two}</p>
            </div>
        );
    }
});

export default ComponentXieTong;
