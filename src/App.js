import React from "react";
import Nav from "./components/Nav";
import routes from "./config/routes";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div>{routes}</div>
    </div>
  );
}

export default App;
