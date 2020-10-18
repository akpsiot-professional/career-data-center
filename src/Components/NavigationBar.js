import React from 'react';
import {Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import akpsi_logo from '../akpsi_logo.svg';
import akpsi_sticker from '../akpsiot_sticker.svg';
import Filter from './Filter'

function NavigationBar() {
    return (
        // <Navbar style={{backgroundColor: "#D4AF37"}} variant="light" float="center" fixed="top">
        <Navbar style={{backgroundColor: "#FFB100"}} variant="light" float="center" fixed="top">
            {/* <img style={{height: "50px"}} src={akpsi_logo} className="App-logo" alt="logo" /> */}
            <a href="/"><img style={{height: "60px", paddingRight: "20px"}} src={akpsi_sticker} alt="logo"/></a>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
                <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                <Nav.Link as={Link} to="/resumes">Resumes</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavigationBar;