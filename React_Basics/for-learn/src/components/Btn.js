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

    return count;
  };

  return (
    <div>
      <button
        onClick={function () {
          console.log("first example");
        }}
      >
        An inline anonymous ES5 function event handler
      </button>
      <br />

      <button onClick={() => console.log("second example")}>
        An inline anonymous ES6 function event handler
      </button>
      <br />

      <button onClick={clickHandler}>Cart</button>
      <button onMouseOver={clickHandler}>Click me</button>
    </div>
  );
}

export default Btn;
