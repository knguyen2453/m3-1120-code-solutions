import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    if (this.state.isOn) {
      return (
        <div>
          <div className="toggle-switch-container" onClick={this.handleClick}>
            <div className="toggle-switch-button-on"></div>
          </div>
          <label>ON</label>
        </div>
      );
    }
    return (
      <div>
        <div className="toggle-switch-container" onClick={this.handleClick}>
          <div className="toggle-switch-button-off"></div>
        </div>
        <label>OFF</label>
      </div>
    );
  }
}
