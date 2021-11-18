import React from "react";
import { useState } from "react";
import MyNavbar from "./components/Nav";
import AppRoutes from "./config/routes";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      {isAuth ? <MyNavbar /> : null}
      <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
    </>
  );
}

export default App;
