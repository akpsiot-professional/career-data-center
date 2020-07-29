import React from 'react';
import { Navbar, Nav, Tab, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css';
import LoremIpsum from '../LoremIpsum'

// TODO: add props that let us specify whether we want a job postings list or a reviews list
function ElementsList(props) {
    const elementType = props.elementType
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={4}>
                    <Nav variant="tabs" className="flex-column">
                        {/* Testing a bunch of tabs */}
                        {/* This should get replaced with a function call that iterates over available data 
                        from the database and displays a few basic parts of job or review information in the list of jobs on the left*/}
                        {
                            Array.from({ length: 20 }).map((_, index) => (
                                <Nav.Item>
                                    <Nav.Link eventKey={"eventNum_" + index.toString()}>{elementType} {index}</Nav.Link>
                                </Nav.Item>
                            ))
                        }
                    </Nav>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        {/* Testing with many tabs */}
                        {/* This should get replaced with a function call that iterates over available data 
                        from the databse and displays FULL job or review information in the left pane*/}
                        {
                            Array.from({ length: 20 }).map((_, index) => (
                                <Tab.Pane eventKey={"eventNum_" + index.toString()}>
                                    <LoremIpsum />
                                </Tab.Pane>
                            ))
                        }
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default ElementsList;