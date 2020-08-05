import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  const a23 = 1;
  const a12 = 22;

  const asad = a23 + a12;
  console.log(asad);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>1</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
