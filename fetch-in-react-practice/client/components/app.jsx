import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(res => res.json())
      .then(data => this.setState({
        todos: data
      }));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(data => {
        this.getAllTodos(data);
      });
  }

  toggleCompleted(todoId) {
    const findTodo = todos => todos.id === todoId;
    const index = this.state.todos.findIndex(findTodo);

    const complete = this.state.todos[index].isCompleted;

    const checkComplete = {
      isCompleted: !this.state.isCompleted
    };

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(checkComplete)
    })
      .then(res => res.json())
      .then(data => {
        const todosArray = this.state.todos.slice(0);
        const update = todosArray.splice(complete, 1, data);
        this.getAllTodos(data);
        this.setState({ todos: update });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
