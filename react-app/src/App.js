import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from "radium";
import styled from "styled-components";

// const StyledButton = styled.button`
// background: ${props => props.alt ? 'red' : 'green'};
// border: 1px solid blue;
// color: white;
// padding: 8px;
// cursor: pointer;
// &:hover {
//   background: lightgreen;
//   color: black;
// },
// `;

class App extends Component {
  state = {
    persons: [
      { id: "sdf", name: "Max", age: 28 },
      { id: "fgg", name: "Manu", age: 29 },
      { id: "zxc", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showUser: true,
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return (p.id = id);
    });
    const foundPerson = this.state.persons[personIndex];
    const person = {
      ...this.state.persons[personIndex],
    };
    //this is way 2
    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  showUserHandler = () => {
    const doesShowUser = this.state.showUser;
    this.setState({ showUser: !doesShowUser });
  };

  deletePersonHandler = (personIndex) => {
    console.log("App -> deletePersonHandler -> personIndex", personIndex);
    // const persons = this.state.persons.slice(); //this is a new array slice will copy to a new array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); // (index of person delete, delete 1 element)
    this.setState({ persons: persons }); //update the persons
  };

  render() {
    let person = null;

    if (this.state.showUser) {
      person = (
        <div>
          {/* this will loop all person array  */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                nameChange={(event) =>
                  this.nameChangedHandler(event, person.id)
                }
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
      // style[":hover"] = {
      //   background: "yellow",
      //   color: "black",
      // };
    }
    const classes = []; //create an array to store styling ele
    if (this.state.persons.length <= 2) {
      classes.push("red"); //this will be converted to this ['red']
    }
    if (this.state.persons.length > 2) {
      classes.push("bold");
      console.log("App -> render -> classes", classes);
    }
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        {/* the classes is modified in CSS file. */}
        {/* method join is to get rid of the comma  */}
        <p className={classes.join(" ")}>This is really working!</p>
        {/* <button
          style={style}
          onClick={() => this.switchNameHandler("Maximilian!!")}
        >
          Switch Name
        </button> */}
        <button alt={this.state.showUser} onClick={() => this.showUserHandler()}>
          Hide/Show User
        </button>
        {person}
      </div>

      // checking condition here
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

//Radium will wrap this component and allow to code css inline
export default App;

// this is hard code array

/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */
