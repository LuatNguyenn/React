import React, { useSate } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personState, setPersonState] = useState ({
    persons: [
      { name: "Max1111", age: "33333" },
      { name: "Max2222", age: "344444" },
      { name: "Max3333", age: "355555" },
    ],
    otherState: 'other value'
  });


 // state manage inside component
 const switchNameHandler = () => {
  setPersonState({persons:[
    { name: "Max1111", age: "33333" },
    { name: "Max2222", age: "344444" },
    { name: "Max3333", age: "355555" }
  ]},
  otherState: 'other value'
})
};

// this is a property so function call doesn't have any ()
eventHandler = () => {
  // this.state.persons[0].name = 'Luat'; DONT DO THIS
  setPersonState({ //react function
    persons: [
      { name: "Luat1111", age: "33333" },
      { name: "Luat2222", age: "344444" },
      { name: "Luat3333", age: "355555" }
    ],
  }); //setState take obj as arg
};


    return (
      <div className="App">
        <h1> ldksajfhg </h1>
        <p>this is really work</p>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person
          name={personState.persons[0].name}
          age={personState.persons[0].name}
        />
        <Person
          name={personState.persons[1].name}
          age={personState.persons[1].name}
        ></Person>
        <Person
          name={personState.persons[2].name}
          age={personState.persons[2].name}
        />
      </div>
    );
    //return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'hi there')) //take 3 args, 1 is element we want to render to,
    //can be your component,
    //2 is configuration (optional), 3 childrend ( what nesed inside <div>)
  }
}

export default app;







