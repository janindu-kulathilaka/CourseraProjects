// import React from "react";

// function Btn() {
//   let count = 1;
//   const clickHandler = () => {
//     console.log(count);
//     count++;
//   };

//   return <button onClick={clickHandler}>Click me</button>;
// }

// export default Btn;

import React from "react";

function Btn() {
  let count = 1;
  const clickHandler = () => {
    console.log(count);
    count++;
  };

  return <button onMouseOver={clickHandler}>Click me</button>;
}

export default Btn;
