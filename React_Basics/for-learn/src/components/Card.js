import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.messageOne}</h2>
      <h3>{props.messageTwo}</h3>
    </div>
  );
}

export default Card;
