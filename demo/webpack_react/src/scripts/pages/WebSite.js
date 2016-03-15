/**
 * Created by ziyu on 16/3/15.
 */
import React from 'react';

const WebSite = React.createClass({
  render() {
    return (
      <div>
          <Name name={this.props.name} />
          <Link site={this.props.site} />
      </div>
    );
  }
});


const Name = React.createClass({
  render() {
    return (
      <h1>
          {this.props.name}
      </h1>
    );
  }
});

const Link = React.createClass({
  render() {
    return (
      <a href={this.props.site}>
          {this.props.site}
      </a>
    );
  }
});




export default WebSite;
