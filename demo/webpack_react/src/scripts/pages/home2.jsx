import React from 'react';

class IndexModule2 extends React.Component {
  render() {
    return (
      <div>test 2
          <p>
          {this.props.name}

          </p>
      </div>
    );
  }
}

IndexModule2.propTypes = {};
IndexModule2.defaultProps = {};

export default IndexModule2;
