import React from "react";
import { useState } from "react";
import MyNavbar from "./components/Nav";
import AgeAuth from "./components/AgeAuth";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      {!isAuth ? (
        <AgeAuth setIsAuth={setIsAuth} />
      ) : (
        <>
          <MyNavbar />
          <Home />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
