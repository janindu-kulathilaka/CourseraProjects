import React from "react";

function Heading(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <h2>{props.message}?</h2>
    </div>
  );
}

export default Heading;
