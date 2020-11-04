import React from 'react';
import { Tab, Row, Col, Container, Button} from 'react-bootstrap'
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

function ResumeInfo(props) {
    if (window.innerWidth <= 500){
        return (props.data.map((value, index) => (
            <Tab.Pane eventKey={"eventNum_" + index.toString()}>
                <Container style={{height: props.height-330, overflowY: "scroll"}}>
                <Row>
                    <Col>
                        <p style={label}>{value["track"]}</p>
                        <h3 style={{textAlign: "left"}}>{value["positions"]}</h3>
                        
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <p style={label}>Submission from</p>
                        <p>{value["first_name"]}{" " + value["last_name"]}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href={value["resume"]} target="_blank">
                            <Button variant="warning">Resume</Button>
                        </a>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <p style={label}>Contact</p>
                        <p style={{textAlign: "left"}}>{value["contact"]}</p>
                    </Col>
                </Row>
                    
                     
                    </Container> 
            </Tab.Pane>
        )
    ))
    }
    return (
        props.data.map((value, index) => (
            <Tab.Pane eventKey={"eventNum_" + index.toString()}>
                <Container style={{height: props.height-330, overflowY: "scroll"}}>
                <Row>
                    <Col>
                        <p style={label}>{value["track"]}</p>
                        <h3 style={{textAlign: "left"}}>{value["positions"]}</h3>
                        
                    </Col>
                    <Col>
                        <p style={label}>Submission from</p>
                        <p>{value["first_name"]}{" " + value["last_name"]}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href={value["resume"]} target="_blank">
                            <Button variant="warning">Resume</Button>
                        </a>
                    </Col>
                    <Col>
                        <p style={label}>Contact</p>
                        <p style={{textAlign: "left"}}>{value["contact"]}</p>
                    </Col>
                </Row>
                    
                     
                    </Container> 
            </Tab.Pane>
        )
    ))
}

export default ResumeInfo;