import React from "react";
import "./person.css";
import Radium from "radium";
import styled from "styled-components";

// const person = (props) => {
//   const style = {
//     padding: '10px',
//     border: '1px solid grey',
//     background: 'lightGrey'
//   };

//   return (
//     <div className='Person'>
//       <p style={style} onClick={props.click}>
//         I am a {props.name} and i am {props.age} years old!
//       </p>
//       {/* this is react things that help to generrate the rest of text or html elements from App.js  */}
//       <p>{props.children}</p>
//       <input type='text' onChange={props.nameChange}></input>
//     </div>
//   );
// };

const StyleDiv = styled.div`
    width: 50%;
    margin: auto;
    border: black solid 1px;
  
  @media screen and (min-width: 500px) {
      width: 450px;
    }
`;
const person = (props) => {
  return (
    <StyleDiv className='Person'>
      <p onClick={props.click}>
        I am a {props.name} and i am {props.age} years old!
      </p>
      {/* this is react things that help to generrate the rest of text or html elements from App.js  */}
      <p>{props.children}</p>
      <input type='text' onChange={props.nameChange}></input>
    </StyleDiv>
  );
};

export default person;
