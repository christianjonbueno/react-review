import React from 'react';

class ListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li>{this.props.todo}</li>
    )
  }
}

export default ListEntry;