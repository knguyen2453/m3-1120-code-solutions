import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
  }

  render() {
    if (this.state.value === '') {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Password
              </label>
            </div>
            <div>
              <input type="password" value={this.state.value} onChange={this.handleChange}></input>
              <i className="fa fa-times"></i>
            </div>
            <div className="requiredMessage">
              <label>A password is required.</label>
            </div>
          </form>
        </div>
      );
    } else if (this.state.value.length < 8) {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Password
              </label>
            </div>
            <div>
              <input type="password" value={this.state.value} onChange={this.handleChange}></input>
              <i className="fa fa-times"></i>
            </div>
            <div className="requiredMessage">
              <label>Your password is too short.</label>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Password
              </label>
            </div>
            <div>
              <input type="password" value={this.state.value} onChange={this.handleChange}></input>
              <i className="fa fa-check"></i>
            </div>
          </form>
        </div>
      );
    }
  }
}
