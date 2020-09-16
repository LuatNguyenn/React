import logo from "./logo.svg";
import React, { Component } from "react";

import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    users: [{ username: "Luat Nguyen 1" }, { username: "Luat Nguyen 2" }],
  };

  switchNameHandler = (event) => {
    this.setState({users: [{ username: event.target.value}]})
  }

  render() {
    return (
      <div className='App'>
        <UserInput onChange={this.switchNameHandler} name={this.state.users[0].username}/>
        <UserOutput userName={this.state.users[0].username} />
      </div>
    );
  }
}

export default App;
