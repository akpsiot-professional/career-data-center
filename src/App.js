import React from 'react';
import logo from './logo.svg';
import './App.css';


function sethsfunction(){
  fetch("https://test-app-akp.azurewebsites.net/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },

        (error) => {
          console.log(error)
        }
      )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={sethsfunction}>
          Oh boy what does this button do?
        </button>
      </header>
    </div>
  );
}

export default App;
