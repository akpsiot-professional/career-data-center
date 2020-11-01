import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Canvas from './Canvas'
import { Redirect } from "react-router-dom";

import DataManager  from '../DataManager'
import stock_1 from '../images/stock_1.jpg'
import stock_2 from '../images/stock_2.jpg'


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

    cardStyle = {
        boxShadow: "0px 0px 14px -1px rgba(0,0,0,0.5)",
        width:"100%"
    }

    loadData(){
        DataManager.getData(this.type).then(response => {
            if (response["error"]){
                this.setState({ redirect: "/" });
            }else {
                console.log(response["job_form"])
                this.setState({
                    job_form : response["job_form"],
                    review_form : response["review_form"],
                });
            }
        }
        )
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
                                    Know of a job opportunity? Would you be willing to talk to those who are interested?
                                    </Card.Text>
                                    <a href={this.state.job_form}>
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
                                    <a href={this.state.review_form}>
                                        <Button>Post a Review</Button>
                                    </a>
                                </Card.Body>
                                </Card>
                            
                            </Col>

                        </Row>
                    </Container>
                </div>
                
            </div>
        )
    }
}
export default More