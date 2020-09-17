import React from "react";

const countChar = (props) => {
//  const charArray = [...props.charValue];
//  let newArray = [];
//  let ele = null;
//   charArray.map((element, index) => {
//     newArray.push(element);
//     ele = element;
//     console.log("countChar -> ele", ele)
//   });

const styles = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
}

  return(
      <div style={styles} onClick={props.deleteItem}>
          {props.char}
      </div>
  )
};
export default countChar;
