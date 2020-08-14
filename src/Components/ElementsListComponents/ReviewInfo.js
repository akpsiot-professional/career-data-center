import React from 'react';
import { Navbar, Nav, Tab, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css';


const scrollStyle = {
    height: "550px", 
    overflowY:"scroll"
}

const label = {
    marginBottom: "0px",
    fontSize: "10px",
    color: "rgb(200, 200, 255)"
}

function work(value){
    if (value["share_work_optional"][0] == "Y" || value["share_internship_optional"][0] == "N" || value["share_internship_optional"][0] == "W"){
        return (
            <div>
                <h3 style={{textAlign: "left"}}>Work Experience</h3>
                <div style={{maxHeight: "300px", overflow:"scroll", backgroundColor: "rgba(255, 255, 255, 0.1)"}}>
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
                            <p>{value["enjoybale_rating"]}</p>
                        </Col>
                        <Col>
                            <p style={label}>Compensation</p>
                            <p>{value["compensation"]}</p>
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
                </div>
            </div>
        )
    }
    return
}

function interview(value){
    if (value["share_internship_optional"][0] == "Y"){
        return (
            <div>
                <h3 style={{textAlign: "left"}}>Interview Experience</h3>
                <div style={{maxHeight: "300px", overflow:"scroll", backgroundColor: "rgba(255, 255, 255, 0.1)"}}>
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
                            <p>{value["difficulty_level"]}</p>
                        </Col>
                        <Col>
                            <p style={label}>Why?</p>
                            <p>{value["difficulty_explanation"]}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={label}>Enjoyable Level (out of 5)</p>
                            <p>{value["enjoyable_level"]}</p>
                        </Col>
                        <Col>
                            <p style={label}>Why?</p>
                            <p>{value["enjoyable_explanation"]}</p>
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
                    
                </div>
            </div>
        )
    }
    return
}

function ReviewInfo(props) {
    return (
        props.data.map((value, index) => (
            <Tab.Pane eventKey={"eventNum_" + index.toString()}>
            <div style={scrollStyle}>
                <Row>
                    <Col>
                        <p style={label}>{value["company_type"]}</p>
                        <h3 style={{textAlign: "left"}}>{value["company_title"]}</h3>
                        
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

                {interview(value)}
                {work(value)}
            </div>
            
            </Tab.Pane>

          )
    ))
    
}

export default ReviewInfo;