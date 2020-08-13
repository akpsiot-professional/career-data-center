import React from 'react';
import akpsi_logo from './akpsi_logo.svg';
import { Container, Row, Col } from 'react-bootstrap'
import NavigationBar from './Components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col>
          <img src={akpsi_logo} className="App-logo" alt="logo" />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Home page WIP ideas:
        </p>
        <ul>
          <li>Link to the google form</li>
          <li>Statistics on the page ex: how many jobs have been submitted</li>
          <li>How to use the site/about</li>
        </ul>

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
    </Container>
  );
}

export default App;
