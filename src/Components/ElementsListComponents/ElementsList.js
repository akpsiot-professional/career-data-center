import React from 'react';
import { Nav, Tab, Row, Col, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css';
import JobInfo from './JobInfo'
import ReviewInfo from './ReviewInfo'

const scrollStyle = {
    overflowY:"scroll",
}

const label = {
    marginBottom: "0px",
    fontSize: "10px",
    color: "#D4AF37"
}

const highlightColor = {
    backgroundColor: "#C68892ff"
}


// TODO: add props that let us specify whether we want a job postings list or a reviews list
function ElementsList(props) {
    var rows = renderRows(props.elementType, props.data)
    var content = renderContent(props.elementType, props.data, props.height)
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="eventNum_0">
            <Row>
                <Col sm={4}>
                    <Card className="text-left" style={{height: props.height-250, boxShadow: "0px 0px 14px -1px rgba(0,0,0,0.5)"}}>
                        <Card.Header style={{backgroundColor: 'rgb(234, 171, 0)'}}as="h4">Positions</Card.Header>
                        <div style={scrollStyle}>
                            <Card.Body>
                                <Nav variant="pills" className="flex-column">
                                    {rows}
                                </Nav>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col sm={8}>
                    <Card className="text-left" style={{height: props.height-250, boxShadow: "0px 0px 14px -1px rgba(0,0,0,0.5)"}}>
                        <Card.Header style={{backgroundColor: 'rgb(234, 171, 0)'}} as="h4">Information</Card.Header>
                        <Card.Body>
                            <Tab.Content>
                                {content}
                            </Tab.Content>
                        </Card.Body>
                    </Card>
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
                    <Nav.Item>
                        <Nav.Link eventKey={"eventNum_" + index.toString()}>
                                <h5>{value["company_title"]}</h5>
                                <p>{value["position_title"]}</p>
                        </Nav.Link>
                    </Nav.Item>
                  ))
            )
    }
}



function renderContent(type, data, height){
    switch(type){
        case "jobs":
            return (
                <JobInfo data={data} height={height}></JobInfo>
            )
        case "reviews":
            return (
                <ReviewInfo data={data} height={height}></ReviewInfo>
            )
    }
}

export default ElementsList;