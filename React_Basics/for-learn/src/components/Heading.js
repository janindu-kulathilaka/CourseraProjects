import React from "react";

function Heading(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <h2>How can I help you?</h2>
    </div>
  );
}

export default Heading;
