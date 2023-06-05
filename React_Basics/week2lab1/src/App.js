import { BrowserRouter } from "react-router-dom";
import React from "react";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import { Routes, Route } from "react-router-dom";

function App() {
  const [fruits] = React.useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);
  return (
    <div className="App">
      <nav className="nav">
        <a href="/" className="nav-item">
          Homepage
        </a>
        <a href="/about-me" className="nav-item">
          About Me
        </a>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
