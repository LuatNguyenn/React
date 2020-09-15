import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        I am a {props.name} and i am {props.age} years old!
      </p>
      {/* this is react things that help to generrate the rest of text or html elements from App.js  */}
      <p>{props.children}</p>
    </div>
  );
};

export default person;
