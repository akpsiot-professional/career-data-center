import React from 'react';
import {Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import akpsi_sticker from '../akpsiot_sticker.svg';

import jobs_icon from '../icons/jobs.png'
import reviews_icon from '../icons/reviews.png'
import more_icon from '../icons/plus.png'
import document_icon from '../icons/document.png'
import about_icon from '../icons/information.png'

let iconStyle = {
    height: "20px",
    marginRight: "10px",
    marginTop: "-5px"
}

function NavigationBar() {
    return (
        <Navbar style={{backgroundColor: "#FFB100"}} variant="light" float="center" fixed="top">
            <Link to="/"><img style={{height: "40px", paddingRight: "20px"}} src={akpsi_sticker} alt="logo"/></Link>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/jobs"><img style={iconStyle} src={jobs_icon}></img>Jobs</Nav.Link>
                <Nav.Link as={Link} to="/reviews"><img style={iconStyle} src={reviews_icon}></img>Reviews</Nav.Link>
                <Nav.Link as={Link} to="/more"><img style={iconStyle} src={more_icon}></img>Submit Post</Nav.Link>
                <Nav.Link as={Link} to="/resumes"><img style={iconStyle} src={document_icon}></img>Resumes</Nav.Link>
                <Nav.Link as={Link} to="/about"><img style={iconStyle} src={about_icon}></img>About</Nav.Link>
            </Nav>
        </Navbar>
        
    )
}

export default NavigationBar;