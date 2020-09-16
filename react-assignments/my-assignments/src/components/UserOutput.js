import React from "react";
import './output.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>
        lorem10ipsum dolor sit amet, consectetur adipiscingloremp lorem, sed do
        eiusmod tempor inc
      </p>
      <p>
        <strong>This is my user name: {props.userName}</strong>
      </p>
    </div>
  );
};

export default userOutput;