import React from 'react';
import { connect } from 'react-redux';


class List extends React.Component {

  render() {
    return (
      <div>
        <h2>list</h2>
      </div>
    )
  }
}

export default connect(null)(List);
