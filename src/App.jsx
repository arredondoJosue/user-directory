import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import data from "../../data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Home</p>
      </header>
      <main>
        <Card />
      </main>
    </div>
  );
}

export default App;
