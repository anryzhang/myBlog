/**
 * Created by ziyu on 16/3/19.
 */
import React from 'react';

const ChildrenModule = React.createClass({
  render() {
    return (
        <div>
          <h2>{this.props.children}</h2>
          <p>{this.props.txt}</p>
        </div>

    );
  }
});

export default ChildrenModule;
