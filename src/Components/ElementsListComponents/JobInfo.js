import React from 'react';
import { Navbar, Nav, Tab, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css';
import LoremIpsum from '../LoremIpsum'

function JobInfo() {
    return (
        <Tab.Pane eventKey="second">
            <LoremIpsum />
        </Tab.Pane>
    )
}

export default JobInfo;