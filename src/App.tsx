import React from "react";
import logo from "./logo.svg";
import "./App.less";
import "./App.scss";
import "./AAA.css";

function App() {
  const a = 1;
  const asd: any = window;
  asd.a = a;
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
