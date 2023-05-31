import Card from "./components/Card";
import Btn from "./components/Btn";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        <Card messageOne="First card's h2" messageTwo="First card's h2" />
        <Card messageOne="Second card's h2" messageTwo="Second card's h3" />
        <Card messageOne="Third card's h2" messageTwo="Third card's h3" />
        <Btn />
      </h1>
    </div>
  );
}

export default App;
