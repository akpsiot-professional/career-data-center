import React from 'react';
import { Nav, Tab, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css';


const pad = {
    paddingTop: "20px"
}

const label = {
    marginBottom: "0px",
    fontSize: "15px",
    color: 'rgb(152, 30, 50)'
}

function work(value){
    if (value["share_work_optional"][0] == "Y" || value["share_internship_optional"][0] == "N" || value["share_internship_optional"][0] == "W"){
        return (
            <Tab.Pane eventKey="work">
                <Row>
                    <Col>
                        <p style={label}>Start Date</p>
                        <p>{value["start"]}</p>
                    </Col>
                    <Col>
                        <p style={label}>End Date</p>
                        <p>{value["end"]}</p>
                    </Col>
                    <Col>
                        <p style={label}>Hours Per Week</p>
                        <p>{value["hours_per_week"]}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={label}>Tasks</p>
                        <p>{value["tasks"]}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={label}>Would You Recomend? (Out of 5)</p>
                        <p>{value["recomend_rating"]}</p>
                    </Col>
                    <Col>
                        <p style={label}>How Enjoyable? (Out of 5)</p>
                        <p>{value["enjoyable_rating"]}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={label}>Compensation</p>
                        <p>{(value["compensation"] !== undefined && value["compensation"] !== "") ? value["compensation"] : '-'}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={label}>Favorite Part</p>
                        <p>{value["favorite"]}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={label}>Least Favorite Part</p>
                        <p>{value["least_favorite"]}</p>
                    </Col>
                </Row>
            </Tab.Pane>
        )
    }
    return
}

function interview(value){
    if (value["share_internship_optional"][0] == "Y"){
        return (
            <Tab.Pane eventKey="interview">
                <Row>
                    <Col>
                        <p style={label}>Interview Type</p>
                        <p>{value["type_interview"]}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={label}>Highlighted Questions</p>
                        <p>{value["questions"]}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={label}>Suggested Prep</p>
                        <p>{value["prep"]}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={label}>Difficulty Level (out of 5)</p>
                        <p>{value["difficulty_level"] + ' - ' + value["difficulty_explanation"]}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={label}>Enjoyable Level (out of 5)</p>
                        <p>{value["enjoyable_level"] + ' - ' + value["enjoyable_explanation"]}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={label}>Result</p>
                        <p>{value["result"]}</p>
                    </Col>
                    <Col>
                        <p style={label}>Total Interview Period</p>
                        <p>{value["time"]}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={label}>Comments</p>
                        <p>{value["additional"]}</p>
                    </Col>
                </Row>
            </Tab.Pane>
        )
    }
    return
}

function renderTabs(value, height) {
    if (work(value) != undefined && interview(value) != undefined) {
        return (
            <Tab.Container defaultActiveKey="interview" style={{height: height-400, backgroundColor: "rgba(255, 255, 255, 0.1)"}}>
                <Nav variant="tabs" defaultActiveKey="interview">
                    <Nav.Item>
                        <Nav.Link eventKey="interview">Interview Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="work">Work Experience</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content style={pad}>
                    {interview(value)}
                    {work(value)}
                </Tab.Content>
            </Tab.Container>
        )
    } else if (work(value) != undefined && interview(value) == undefined) {
        return (
            <Tab.Container defaultActiveKey="work" style={{height: height-400, backgroundColor: "rgba(255, 255, 255, 0.1)"}}>
                <Nav variant="tabs" defaultActiveKey="work">
                    <Nav.Item>
                        <Nav.Link eventKey="work">Work Experience</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content style={pad}>
                    {work(value)}
                </Tab.Content>
            </Tab.Container>
        )
    } else {
        return (
            <Tab.Container defaultActiveKey="interview" style={{height: height-400, backgroundColor: "rgba(255, 255, 255, 0.1)"}}>
                <Nav variant="tabs" defaultActiveKey="interview">
                    <Nav.Item>
                        <Nav.Link eventKey="interview">Interview Experience</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content style={pad}>
                    {interview(value)}
                </Tab.Content>
            </Tab.Container>
        )
    }
}

function ReviewInfo(props) {
    return (
        props.data.map((value, index) => (
            <Tab.Pane eventKey={"eventNum_" + index.toString()}>
                <Row>
                    <Col>
                        <p style={label}>{value["company_type"]}</p>
                        <p style={{textAlign: "left"}}>{value["company_title"]}</p>
                        
                    </Col>
                    <Col>
                        <p style={label}>Submission from</p>
                        <p>{value["first_name"]}{" " + value["last_name"]}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={label}>Position</p>
                        <p>{value["position_title"]}</p>
                    </Col>
                    <Col>
                        <p style={label}>Contact</p>
                        <p>{value["contact"]}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{height: props.height-450, overflowY: "scroll", overflowX: "hidden"}}>
                            {renderTabs(value)}
                        </div>
                    </Col>
                </Row>
            </Tab.Pane>
        )
    ))
}

export default ReviewInfo;