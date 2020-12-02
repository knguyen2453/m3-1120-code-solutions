import React from 'react';

export default class CustomHotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: this.state.clicked + 1 });
  }

  render() {
    const numberOfClicks = this.state.clicked;
    let hotButton;
    if (numberOfClicks <= 2) {
      hotButton = 'purple';
    } else if (numberOfClicks >= 3 && numberOfClicks < 6) {
      hotButton = 'lightpurple';
    } else if (numberOfClicks >= 6 && numberOfClicks < 9) {
      hotButton = 'red';
    } else if (numberOfClicks >= 9 && numberOfClicks < 12) {
      hotButton = 'orange';
    } else if (numberOfClicks >= 12 && numberOfClicks < 15) {
      hotButton = 'yellow';
    } else if (numberOfClicks >= 15 && numberOfClicks < 18) {
      hotButton = 'white';
    } else {
      hotButton = 'white';
    }

    return (
      <button className={hotButton} onClick={this.handleClick}>Hot Button</button>
    );
  }
}
