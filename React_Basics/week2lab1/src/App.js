// import { BrowserRouter } from "react-router-dom";
import React from "react";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  // const [fruits] = React.useState([
  //   { fruitName: "apple", id: 1 },
  //   { fruitName: "apple", id: 2 },
  //   { fruitName: "plum", id: 3 },
  // ]);
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about-me" className="nav-item">
          About Me
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
