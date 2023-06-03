//relationship between child and parent

// function Main(props) {
//   return <Header msg={props.msg} />;
// }

// function Header(props) {
//   return (
//     <div style={{ border: "10px solid whitesmoke" }}>
//       <h1>Header here</h1>
//       <Wrapper msg={props.msg} />
//     </div>
//   );
// }

// function Wrapper(props) {
//   return (
//     <div style={{ border: "10px solid lightgray" }}>
//       <h2>Wrapper here</h2>
//       <Button msg={props.msg} />
//     </div>
//   );
// }

// function Button(props) {
//   return (
//     <div style={{ border: "20px solid orange" }}>
//       <h3>This is the button component</h3>
//       <button onClick={() => alert(props.msg)}>Click me!</button>
//     </div>
//   );
// }

import React from "react";

const MealsContext = React.createContext();

const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

const MealsProvider = ({ children }) => {
  const [meals, setMealsList] = React.useState(todaysMeals);

  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
};

function App() {
  return (
    <div className="App">
      <Main msg="I passed through the Header and the Wrapper and I reached the Button component" />
    </div>
  );
}

export default App;
