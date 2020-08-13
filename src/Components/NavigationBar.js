import React from 'react';
import {Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" float="center" fixed="top">
                <Navbar.Brand href="/">Omega Theta Professional Portal</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
                    <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                    <Nav.Link as={Link} to="/resumes">Resumes</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default NavigationBar;