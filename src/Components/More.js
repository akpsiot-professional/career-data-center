import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Canvas from './Canvas'
import { Redirect } from "react-router-dom";

import DataManager  from '../DataManager'
import stock_1 from '../images/stock_1.jpg'
import stock_2 from '../images/stock_2.jpg'
import stock_7 from '../images/stock_7.jpg'


class More extends React.Component{
    constructor(props){
        super(props)
        this.type = "forms"
        this.state = {
            job_form : "",
            review_form : "",
            redirect: null
        }

        this.loadData()
    }

    

    loadData(){
        DataManager.getData(this.type).then(response => {
            if (response["error"]){
                this.setState({ redirect: "/" });
            }else {
                this.setState({
                    job_form : response["data"]["job_form"],
                    review_form : response["data"]["review_form"],
                    resume_form : response["data"]["resume_form"]
                });
            }
        }
        )
    }

    cardStyle = {
        boxShadow: "0px 0px 14px -1px rgba(0,0,0,0.5)",
        width:"100%"
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
        return (
            <div>
                <Canvas></Canvas>
                <div style={{marginTop: "100px", zIndex: 1}}> 
                    <Container fluid className="App">
                        <Row>
                            <Col>
                                <Card style={this.cardStyle}>
                                <Card.Img variant="top" src={stock_1} />
                                <Card.Body>
                                    <Card.Title>Job Opportunities</Card.Title>
                                    <Card.Text>
                                        Know of an Entry-Level or Internship Opportunity?
                                    </Card.Text>
                                    <a target="_blank" href={this.state.job_form}>
                                        <Button>Post a Job Opportunity</Button>
                                    </a>
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card style={this.cardStyle}>
                                <Card.Img variant="top" src={stock_2} />
                                <Card.Body>
                                    <Card.Title>Company Reviews</Card.Title>
                                    <Card.Text>
                                        If you worked for a company or interviewed for a position there.
                                    </Card.Text>
                                    <a target="_blank" href={this.state.review_form}>
                                        <Button>Post a Review</Button>
                                    </a>
                                </Card.Body>
                                </Card>
                            
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                            <Card style={this.cardStyle}>
                                <Card.Img variant="top" src={stock_7} />
                                <Card.Body>
                                    <Card.Title>Resumes</Card.Title>
                                    <Card.Text>
                                        Submit your resume at the time of interviewing.
                                    </Card.Text>
                                    <a target="_blank" href={this.state.resume_form}>
                                        <Button>Submit a Resume</Button>
                                    </a>
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </div>
        )
    }
}
export default More