// import "./App.css";

// const Button = ({ children, backgroundColor }) => {
//   return <button style={{ backgroundColor }}>{children}</button>;
// };

// const Alert = ({ children }) => {
//   return (
//     <>
//       <div className="Overlay" />
//       <div className="Alert">{children}</div>
//     </>
//   );
// };

// const DeleteButton = () => {
//   return <Button backgroundColor="red">Delete</Button>;
// };

// function App() {
//   return (
//     <div className="App">
//       <header>Little Lemon Restaurant </header>
//       <Alert>
//         <h4>Delete Account</h4>
//         <p>
//           Are you sure want to proceed? You will miss all your delicious
//           recipes!
//         </p>
//         <DeleteButton />
//       </Alert>
//     </div>
//   );
// }

// export default App;

//----------------------------------------week 3 lab 1 ----------------------------------------

import "./App.css";
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;
