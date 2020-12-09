import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      playIsOn: true
    };
    this.addSeconds = this.addSeconds.bind(this);
    this.restartSeconds = this.restartSeconds.bind(this);
    this.startPause = this.startPause.bind(this);
    this.oneSecond = this.oneSecond.bind(this);
    this.stopSecond = this.stopSecond.bind(this);
    this.addSecondsPause = this.addSecondsPause.bind(this);
    this.pauseSecondsPlay = this.pauseSecondsPlay.bind(this);
  }

  addSeconds() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  restartSeconds() {
    this.setState({ seconds: 0 });
  }

  startPause() {
    this.setState({ playIsOn: !this.state.playIsOn });
  }

  oneSecond() {
    this.addSecond = setInterval(this.addSeconds, 1000);
  }

  stopSecond() {
    clearInterval(this.addSecond);
  }

  addSecondsPause() {
    this.startPause();
    this.oneSecond();
  }

  pauseSecondsPlay() {
    this.startPause();
    this.stopSecond();
  }

  render() {
    if (!this.state.playIsOn) {
      return (
        <div className="stopwatch-container">
          <div className="secondCircle">
            <div className="counter">{this.state.seconds}</div>
          </div>
          <div><i className="fa fa-pause" onClick={this.pauseSecondsPlay}></i></div>
        </div>
      );
    }

    return (
      <div className="stopwatch-container">
        <div className="secondCircle" onClick={this.restartSeconds}>
          <div className="counter">{this.state.seconds}</div>
        </div>
        <div><i className="fa fa-play" onClick={this.addSecondsPause}></i></div>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);
