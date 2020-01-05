import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todos: []
    }
  }

  onChangeTodo(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitTodo(event) {
    event.preventDefault();
    let currentTodos = this.state.todos;
    currentTodos.push(this.state.todo)

    this.setState({
      todos: currentTodos,
      todo: ''
    }, () => console.log(this.state))

    document.getElementById('form').reset();
  }

  render() {
    return (
      <div>
        <h3>List Component says waddup</h3>
        <form id="form" onSubmit={this.submitTodo.bind(this)}>
          <input type="text" name="todo" onChange={this.onChangeTodo.bind(this)}/>
          <button>Add To List</button>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => {
           return <ListEntry todo={todo} index={index} />})}
        </ul>
      </div>
    )
  }
};

export default List;

