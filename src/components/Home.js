import React from "react";
import { username, city } from "../data/user"; // Correct relative path to user.js

function Home() {
  return (
    <div id="home">
      <h1>Welcome, {username}!</h1>
      <p>City: {city}</p>
    </div>
  );
}

export default Home;
