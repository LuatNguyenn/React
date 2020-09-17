import React from "react";
import "./person.css";

const person = (props) => {
  const style = {
    padding: '10px',
    border: '1px solid grey',
    background: 'lightGrey'
  };

  return (
    <div className='Person'>
      <p style={style} onClick={props.click}>
        I am a {props.name} and i am {props.age} years old!
      </p>
      {/* this is react things that help to generrate the rest of text or html elements from App.js  */}
      <p>{props.children}</p>
      <input type='text' onChange={props.nameChange}></input>
    </div>
  );
};

export default person;
