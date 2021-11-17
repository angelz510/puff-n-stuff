import React from "react";
import { useState } from "react";
import Nav from "./components/Nav";
import AgeAuth from "./components/AgeAuth";
import routes from "./config/routes";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      {!isAuth ? (
        <AgeAuth setIsAuth={setIsAuth} />
      ) : (
        <>
          <Nav />
          <div>{routes}</div>
        </>
      )}
    </div>
  );
}

export default App;
