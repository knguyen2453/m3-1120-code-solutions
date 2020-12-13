import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      isError: false
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(res => {
        return res.json();
      })
      .then(this.setState({ isLoading: false }))
      .then(data => this.setState({ users: data }))
      .catch(error => this.setState({ isError: error }));
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users}/>;
  }
}

export default App;
