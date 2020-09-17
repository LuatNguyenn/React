import logo from "./logo.svg";
import React, { Component } from "react";

import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import ValidationComponent from "./components/ValidationComponent.js";
import CharComponent from "./components/CharComponent";

class App extends Component {
  // START Assignment 1

  // state = {
  //   users: [{ username: "Luat Nguyen 1" }, { username: "Luat Nguyen 2" }],
  // };

  // switchNameHandler = (event) => {
  //   this.setState({users: [{ username: event.target.value}]})
  // }

  // render() {
  //   return (
  //     <div className='App'>
  //       <UserInput onChange={this.switchNameHandler} name={this.state.users[0].username}/>
  //       <UserOutput userName={this.state.users[0].username} />
  //     </div>
  //   );
  // }
  //END Assignment 1

  //START Assignment 2

  state = {
    userInput: "",
  };

  eventHandler = (event) => {
    console.log("App -> eventHandler -> event", event.target.value);
    this.setState({ userInput: event.target.value });
  };

  deleteItem = (index) => {
    const char = this.state.userInput.split('');
    char.splice(index, 1);
    const update = char.join('');
    this.setState({ userInput: update });
  }

  render() {
    const charList = this.state.userInput.split('').map((char, key) => {
    console.log("App -> render -> char", char)
      
      return <CharComponent char={char} key={key} deleteItem={() => this.deleteItem({key})}></CharComponent>;
    });
    return (
      <div>
        <input type='text' onChange={this.eventHandler} />
        <p>{this.state.userInput}</p>

        <ValidationComponent
          inputValue={this.state.userInput}
        ></ValidationComponent>
        {/* <CharComponent charValue={this.state.userInput} /> */}

        {charList}
      </div>
    );
  }
}

export default App;
