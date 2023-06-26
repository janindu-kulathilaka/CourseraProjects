// import { useState } from "react";

// export default function App() {
//   const [giftCard, setGiftCard] = useState({
//     firstName: "Jennifer",
//     lastName: "Smith",
//     text: "Free dinner for 4 guests",
//     valid: true,
//     instructions: "To use your coupon, click the button below.",
//   });

//   function spendGiftCard() {
//     setGiftCard((prevState) => {
//       return {
//         ...prevState,
//         text: "Your coupon has been used,",
//         instructions: "Please visit our restaurant to renew your gift card.",
//         valid: false,
//       };
//     });
//   }

//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>Gift Card Page</h1>
//       <h2>
//         Customer: {giftCard.firstName} {giftCard.lastName}
//       </h2>
//       <h3>{giftCard.text}</h3>
//       <p>{giftCard.instructions}</p>
//       {giftCard.valid && (
//         <button onClick={spendGiftCard}>Spend Gift Card</button>
//       )}
//     </div>
//   );
// }

// ---------------------------lab1--------------------------

// import React from "react";

// function App() {
//   const [user, setUser] = React.useState([]);

//   const fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then((response) => response.json())
//       .then((data) => setUser(data));
//   };

//   React.useEffect(() => {
//     fetchData();
//   }, []);

//   return Object.keys(user).length > 0 ? (
//     <div style={{ padding: "40px" }}>
//       <h1>Customer data</h1>
//       <h2>Name: {user.results[0].name.first}</h2>
//       <img src={user.results[0].picture.large} alt="" />
//     </div>
//   ) : (
//     <h1>Data pending...</h1>
//   );
// }

// export default App;

//-----------------------------------advanced hooks---------------------------

// import React from "react";
// import "./App.css";

// function App() {
//   const formInputRef = React.useRef(null);

//   const focusInput = () => {
//     formInputRef.current.focus();
//   };

//   return (
//     <>
//       <h1>Using useRef to access underline DOM</h1>
//       <input ref={formInputRef} type="text" />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }

// export default App;

//-----------------------------------advanced hooks lab -------------------------------

import { useState, useEffect, useRef } from "react";
export default function App() {
  function usePrevious(val) {
    const ref = useRef();

    useEffect(() => {
      ref.current = val;
    }, [val]);

    return ref.current;
  }

  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>
        Today is: {day}
        <br />
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h1>
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
}
