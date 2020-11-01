import React from 'react';
import {Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import akpsi_sticker from '../akpsiot_sticker.svg';

import jobs_icon from '../icons/jobs.png'
import reviews_icon from '../icons/reviews.png'
import more_icon from '../icons/plus.png'

let iconStyle = {
    height: "20px",
    marginRight: "10px",
}

function NavigationBar() {
    return (
        // <Navbar style={{backgroundColor: "#D4AF37"}} variant="light" float="center" fixed="top">
        <Navbar style={{backgroundColor: "#FFB100"}} variant="light" float="center" fixed="top">
            {/* <img style={{height: "50px"}} src={akpsi_logo} className="App-logo" alt="logo" /> */}
            <a href="/"><img style={{height: "40px", paddingRight: "20px"}} src={akpsi_sticker} alt="logo"/></a>
            <Nav className="mr-auto">
                
                <Nav.Link as={Link} to="/jobs"><img style={iconStyle} src={jobs_icon}></img>Jobs</Nav.Link>
                <Nav.Link as={Link} to="/reviews"><img style={iconStyle} src={reviews_icon}></img>Reviews</Nav.Link>
                <Nav.Link as={Link} to="/more"><img style={iconStyle} src={more_icon}></img>Submit Post</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavigationBar;