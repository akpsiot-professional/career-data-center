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
        <Tab.Container id="left-tabs-example" defaultActiveKey="eventNum_0">
            <Row>
                <Col sm={4}>
                    <Nav variant="pills" className="flex-column">
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
                <Nav.Item >
                    <Nav.Link eventKey={"eventNum_" + index.toString()}>
                        <div>
                            <h5>{value["company_title"]}</h5>
                            <p>{value["position_title"]}</p>
                        </div>
                    </Nav.Link>
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
                    <h5>Name: </h5>
                    <p>{value["first_name"]}
                    {" " + value["last_name"]}</p>
                    <h5>Contact</h5>
                    <p>{value["contact"]}</p>
                    <h5>Company:</h5>
                    <p>{value["company_title"]}</p>
                    <h5>Position Title</h5>
                    <p>{value["position_title"]}</p>
                    <h5>Job Description</h5>
                    <p>{value["job_description"]}</p>
                    <h5>Notes</h5>
                    <p>{value["notes"]}</p>
                    <h5>Conditions</h5>
                    <p>{value["conditions"]}</p>
                </Tab.Pane>

              ))
        )
    }
}

export default ElementsList;