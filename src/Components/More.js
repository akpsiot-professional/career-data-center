import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Canvas from './Canvas'

import stock_1 from '../images/stock_1.jpg'
import stock_2 from '../images/stock_2.jpg'

//Do we need to password protect this ??

const cardStyle = {
    boxShadow: "0px 0px 14px -1px rgba(0,0,0,0.5)",
    width:"100%"

}

function More() {
    return (
        <div>
            <Canvas></Canvas>
            <div style={{marginTop: "100px", zIndex: 1}}> 
                <Container fluid className="App">
                    <Row>
                        <Col>
                            <Card style={cardStyle}>
                            <Card.Img variant="top" src={stock_1} />
                            <Card.Body>
                                <Card.Title>Job Opportunities</Card.Title>
                                <Card.Text>
                                Know of a job opportunity? Would you be willing to talk to those who are interested?
                                </Card.Text>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbHl2WvYY2MBBU-INOpRy_id5HXWccD08sCByYuNWrdFXCcg/viewform?usp=sf_link">
                                    <Button>Post a Job Opportunity</Button>
                                </a>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={stock_2} />
                            <Card.Body>
                                <Card.Title>Company Reviews</Card.Title>
                                <Card.Text>
                                    If you worked for a company or interviewed for a position there.
                                </Card.Text>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf79vOfzZbmRTngJkpxS7fmZa7IQpJ-0SH3VUFz5PklxLbWeg/viewform?usp=sf_link">
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

export default More