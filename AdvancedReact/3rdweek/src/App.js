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

// import "./App.css";
// import { RadioGroup, RadioOption } from "./Radio";
// import { useState } from "react";

// function App() {
//   const [selected, setSelected] = useState("");
//   return (
//     <div className="App">
//       <h2>How did you hear about Little Lemon?</h2>
//       <RadioGroup onChange={setSelected} selected={selected}>
//         <RadioOption value="social_media">Social Media</RadioOption>
//         <RadioOption value="friends">Friends</RadioOption>
//         <RadioOption value="advertising">Advertising</RadioOption>
//         <RadioOption value="other">Other</RadioOption>
//       </RadioGroup>
//       <button disabled={!selected}>Submit</button>
//     </div>
//   );
// }

// export default App;

//----------------------------------------week 3 HOC for cursor position ----------------------------------------

// import "./App.css";
// import { useState, useEffect } from "react";

// const withMousePosition = (WrappedComponent) => {
//   return (props) => {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//       const handleMousePositionChange = (e) => {
//         setMousePosition({ x: e.clientX, y: e.clientY });
//       };

//       window.addEventListener("mousemove", handleMousePositionChange);

//       return () => {
//         window.removeEventListener("mousemove", handleMousePositionChange);
//       };
//     }, []);

//     return <WrappedComponent {...props} mousePosition={mousePosition} />;
//   };
// };

// const PanelMouseLogger = ({ mousePosition }) => {
//   if (!mousePosition) return null;
//   return (
//     <div className="BasicTracker">
//       <h2>Mouse Position: </h2>
//       <div className="Row">
//         <span>x: {mousePosition.x}</span>
//         <span>y: {mousePosition.y}</span>
//       </div>
//     </div>
//   );
// };

// const PointMouseLogger = ({ mousePosition }) => {
//   if (!mousePosition) return null;
//   return (
//     <p>
//       ({mousePosition.x}, {mousePosition.y})
//     </p>
//   );
// };

// const PanelMouseTracker = withMousePosition(PanelMouseLogger);
// const PointMouseTracker = withMousePosition(PointMouseLogger);

// function App() {
//   return (
//     <div className="App">
//       <header className="Header">Little Lemon Restaurant</header>
//       <PanelMouseTracker />
//       <PointMouseTracker />
//     </div>
//   );
// }

// export default App;

//----------------------------------------week 3 lab 2 ----------------------------------------

// import "./App.css";
// import { useEffect, useState } from "react";

// const MousePosition = ({ render }) => {
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const handleMousePositionChange = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMousePositionChange);

//     return () => {
//       window.removeEventListener("mousemove", handleMousePositionChange);
//     };
//   }, []);

//   return mousePosition ? render(mousePosition) : null;
// };

// const PanelMouseLogger = () => {
//   return (
//     <MousePosition
//       render={(mousePosition) => (
//         <div className="BasicTracker">
//           <p>Mouse position:</p>
//           <div className="Row">
//             <span>x: {mousePosition.x}</span>
//             <span>y: {mousePosition.y}</span>
//           </div>
//         </div>
//       )}
//     />
//   );
// };

// const PointMouseLogger = () => {
//   return (
//     <MousePosition
//       render={(mousePosition) => (
//         <p>
//           ({mousePosition.x}, {mousePosition.y})
//         </p>
//       )}
//     />
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <header className="Header">Little Lemon Restaurant 🍕</header>
//       <PanelMouseLogger />
//       <PointMouseLogger />
//     </div>
//   );
// }

// export default App;

//----------------------------------------week 3 React Test Library ----------------------------------------

import "./App.css";

function App() {
  return (
    <div className="App">
      <a href="https://littlelemon.com" className="App-Link">
        Little Lemon Restaurant
      </a>
    </div>
  );
}

export default App;
