import React from "react";
import Nav from "./components/Nav";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import routes from "./config/routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content-container">
        {/* {routes} */}
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
