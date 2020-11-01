import React from 'react';
import akpsi_logo from './akpsi_logo.svg';
import { Container, Row, Col } from 'react-bootstrap'
import NavigationBar from './Components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import LandingPage from './Components/LandingPage'


const landingpageStyle = {
  marginTop: "300px",
};



function App() {
  return (
    <div>
      <LandingPage></LandingPage>
    </div>
    
  );
}

export default App;
