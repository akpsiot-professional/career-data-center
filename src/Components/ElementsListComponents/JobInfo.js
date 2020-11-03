import React from 'react';
import { Tab, Row, Col, Container } from 'react-bootstrap'
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

function JobInfo(props) {
    return (
        props.data.map((value, index) => (
            <Tab.Pane eventKey={"eventNum_" + index.toString()}>
                <Container style={{height: props.height-330, overflowY: "scroll"}}>
                <Row>
                        <Col>
                            <p style={label}>{value["company_type"]}</p>
                            <h3 style={{textAlign: "left"}}>{value["company_title"]}</h3>
                            
                        </Col>
                        <Col>
                            <p style={label}>Submission from</p>
                            <p>{value["first_name"]}{" " + value["last_name"]}</p>
                        </Col>
                        <Col>
                            <p style={label}>Submitted on</p>
                            <p>{" " + (value["timestamp"].split(" "))[0]}</p>
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
                        <p style={label}>Job Description</p>
                        <div style={{maxHeight: "300px", overflow: "scroll", marginBottom: "10px"}}>
                            <p>{value["job_description"]}</p>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={label}>Notes</p>
                            <p>{value["notes"]}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {offeringReferral(value)}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={label}>Deadline</p>
                            <p>{value["deadline"]}</p>
                        </Col>
                        <Col>
                            <p style={label}>Recruiter Contact</p>
                            <p>{value["contact_recruiter"]}</p>
                        </Col>
                        <Col>
                            <p style={label}>Link</p>
                            <a style={{textAlign: "left"}} target="_blank" href={value["link"]}>Apply</a>
                        </Col>
                    </Row>  
                    </Container> 
            </Tab.Pane>
        )
    ))
}


function offeringReferral(value){
    if (value["referral_optional"][0] == "Y"){
        return (
            <div>
                <p style={label}>Referral Conditions</p>
                <p>{value["conditions"]}</p>
            </div>
        )
    }else {
        return 
    }
}

export default JobInfo;