import React from 'react';
import List from './List.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.changeName = this.onChangeHandler.bind(this)
  }

  onChangeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div>
        {this.state.firstName === this.props.firstName && this.state.lastName === this.props.lastName ? (<List/>) :
        (<form>
          <label>First Name:</label><input type="text" name="firstName" onChange={this.changeName} />
          <br></br>
          <label>Last Name:</label><input type="text" name="lastName" onChange={this.changeName} />
          <br></br>
        </form>)}
      </div>
    )
  }
}

export default App;