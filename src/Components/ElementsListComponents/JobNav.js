import React from 'react';
import { Navbar, Nav, Tab, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css';
import LoremIpsum from '../LoremIpsum'

function JobTab() {
    return (
        <Nav.Item>
            <Nav.Link eventKey="first">
                Job 1
            {/* Basic job information goes here */}
            </Nav.Link>
        </Nav.Item>
    )
}

export default JobTab;