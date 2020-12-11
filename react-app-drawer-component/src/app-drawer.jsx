import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSideBarOpen: false };
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  toggleSideBar() {
    this.setState({ isSideBarOpen: !this.state.isSideBarOpen });
  }

  render() {
    if (this.state.isSideBarOpen) {
      return (
        <div className="sideBarContainer">
          <div className="sideBar">
            <ul>
              <h1>Menu</h1>
              <li onClick={this.toggleSideBar}><a href="#">About</a></li>
              <li onClick={this.toggleSideBar}><a href="#">Get Started</a></li>
              <li onClick={this.toggleSideBar}><a href="#">Sign In</a></li>
            </ul>
          </div>
          <div className="shadeScreen" onClick={this.toggleSideBar}>
          </div>
        </div>
      );
    }

    return (
      <div className="background">
        <div><i className="fa fa-bars" onClick={this.toggleSideBar}></i></div>
      </div>
    );
  }
}
