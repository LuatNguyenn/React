import React from "react";

const values = (props) => {
  const textLength = [...props.inputValue];
  console.log("values -> textLength", textLength);

  let checkLength = null;
  if (textLength.length > 5) {
    checkLength = 'too long'
  }

  return (
    <div>
      <p>{checkLength}</p>
    </div>
  );
};

export default values;
