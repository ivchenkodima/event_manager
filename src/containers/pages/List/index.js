import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../../reducers/events';


class List extends React.Component {
  componentDidMount() {
    console.log('get');
    this.props.onFetchEvents();
  }
  render() {
    return (
      <div>
        <h2>list</h2>
      </div>
    )
  }
}

export default connect(
  state => ({
    events: state.events,
  }),
  dispatch => ({
    onFetchEvents: () => dispatch(fetchEvents()),
  })
)(List);
