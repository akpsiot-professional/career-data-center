import React from 'react';
import akpsi_logo from './akpsi_logo.svg';
import { Container, Row, Col } from 'react-bootstrap'
import NavigationBar from './Components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const formStyle = {
  height: "600px",
  overflow: "scroll"
}


function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col>
          Welcome to the Omega Theta Professional Portal! 
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={akpsi_logo} style={{height: "100px"}} className="App-logo" alt="logo" />
        </Col>
      </Row>
      <Row>
        <Col>
        <h4>
          Submit Work/Interview Experience
        </h4>
        <div style={formStyle}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf79vOfzZbmRTngJkpxS7fmZa7IQpJ-0SH3VUFz5PklxLbWeg/viewform?embedded=true" width="640" height="2382" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        </Col>
        <Col>
        <h4>
          Submit a Job Opportunity
        </h4>
        <div style={formStyle}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf79vOfzZbmRTngJkpxS7fmZa7IQpJ-0SH3VUFz5PklxLbWeg/viewform?embedded=true" width="640" height="2382" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
