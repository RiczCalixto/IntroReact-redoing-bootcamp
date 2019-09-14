import React from "react";
import "./App.css";
import male from "./assets/male.jpg";
import TechList from "./components/TechList";

function App() {
  return (
    <>
      <TechList />
      <img src={male} alt="" />
    </>
  );
}

export default App;
