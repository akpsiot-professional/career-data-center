import React from 'react';
import { Navbar, Nav, Tab, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css';
import JobInfo from './JobInfo'
import ReviewInfo from './ReviewInfo'

const scrollStyle = {
    height: "550px", 
    overflowY:"scroll",
    borderRight: "1px solid white"
}

const label = {
    marginBottom: "0px",
    fontSize: "10px",
    color: "rgb(200, 200, 255)"
}

// TODO: add props that let us specify whether we want a job postings list or a reviews list
function ElementsList(props) {
    var rows = renderRows(props.elementType, props.data)
    var content = renderContent(props.elementType, props.data)
    return (

        <Tab.Container id="left-tabs-example" defaultActiveKey="eventNum_0">
            <Row>
                <Col sm={4}>
                    <Nav variant="pills" className="flex-column">
                        <div style={scrollStyle}>
                            {rows}
                        </div>
                    </Nav>
                </Col>
                <Col  sm={8}>
                    <Tab.Content >
                        {content}
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
                            <h5>{value["company_title"]}</h5>
                            <p>{value["position_title"]}</p>
                    </Nav.Link>
                </Nav.Item>
              ))
        )
        case "reviews":
            return (
                data.map((value, index) => (
                    <Nav.Item >
                        <Nav.Link eventKey={"eventNum_" + index.toString()}>
                                <h5>{value["company_title"]}</h5>
                                <p>{value["position_title"]}</p>
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
            <JobInfo data={data}></JobInfo>
        )
        case "reviews":
            return (
                <ReviewInfo data={data}></ReviewInfo>
            )
    }
}

export default ElementsList;