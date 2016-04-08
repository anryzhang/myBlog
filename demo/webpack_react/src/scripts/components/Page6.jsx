/**
 * Created by ziyu on 16/4/1.
 */

import React from 'react';

class Page6 extends React.Component {
  
  constructor(props) {
      super(props);

      this.state = {
          test:'test'
      };
  }

  render() {

    return (
      <div>
          {this.state.test}
      </div>
    );
  }
}


export default Page6;
