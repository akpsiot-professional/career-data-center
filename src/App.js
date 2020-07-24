import React from 'react';
import logo from './logo.svg';
import { Container, Row, Col } from 'react-bootstrap'
import NavigationBar from './NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function sethsfunction() {
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
    <Container fluid className="App">
      <Row>
        <Col>
          <NavigationBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={logo} className="App-logo" alt="logo" />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <button onClick={sethsfunction}>
            Oh boy what does this button do?
        </button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
