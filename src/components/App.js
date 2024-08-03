import React from "react";
import NavBar from "./NavBar"; // Correct relative path to NavBar.js
import Home from "./Home"; // Correct relative path to Home.js
import About from "./About"; // Ensure this file exists and is correctly named

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
