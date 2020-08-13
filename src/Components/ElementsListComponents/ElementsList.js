import React from 'react';
import { Navbar, Nav, Tab, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css';
import LoremIpsum from '../LoremIpsum'

// TODO: add props that let us specify whether we want a job postings list or a reviews list
function ElementsList(props) {
    var rows = renderRows(props.elementType, props.data)
    var content = renderContent(props.elementType, props.data)
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={4}>
                    <Nav variant="tabs" className="flex-column">
                        {/* Testing a bunch of tabs */}
                        {/* This should get replaced with a function call that iterates over available data 
                        from the database and displays a few basic parts of job or review information in the list of jobs on the left*/}
                        {/* Should be updated to use JobNav/ReviewNav component */}
                        {
                            rows
                        }
                    </Nav>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        {/* Testing with many tabs */}
                        {/* This should get replaced with a function call that iterates over available data 
                        from the databse and displays FULL job or review information in the left pane*/}
                        {/* Should be updated to use ReviewInfo/JobInfoComponent */}
                        {
                            content
                        }
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

function renderRows(type, data){
    switch(type){
        case "jobs":
        return (
            data.map((value, index) => (
                <Nav.Item>
                    <Nav.Link eventKey={"eventNum_" + index.toString()}>{value["first_name"]}</Nav.Link>
                </Nav.Item>
              ))
        )
    }
}

function renderContent(type, data){
    switch(type){
        case "jobs":
        return (
            data.map((value, index) => (
                <Tab.Pane eventKey={"eventNum_" + index.toString()}>
                    <h3>Name: </h3>
                    {value["first_name"]}
                    {value["last_name"]}
                    <h3>Contact</h3>
                    {value["contact"]}
                    <h3>Company:</h3>
                    {value["company_title"]}
                    <h3>Position Title</h3>
                    {value["position_title"]}
                    <h3>Job Description</h3>
                    {value["job_description"]}
                    <h3>Notes</h3>
                    {value["notes"]}
                    <h3>Conditions</h3>
                    {value["conditions"]}
                </Tab.Pane>

              ))
        )
    }
}

export default ElementsList;