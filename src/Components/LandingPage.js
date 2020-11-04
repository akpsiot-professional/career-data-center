import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Container, Row, Col, Jumbotron, Button, Card} from 'react-bootstrap';
import Modal from './modal/src';
import DataManager from '../DataManager'
import akpsi_logo from '../akpsi_logo.svg';
import { Link } from 'react-router-dom'


import Canvas from './Canvas'

import stock_3 from '../images/stock_3.jpg'
import stock_4 from '../images/stock_4.jpg'
import stock_5 from '../images/stock_5.jpg'
import stock_6 from '../images/stock_6.jpg'

import 'react-widgets/dist/css/react-widgets.css';



class LandingPage extends React.Component{
    constructor(props){
        super(props)
        this.type = props.type
        this.attempts = 0
        this.state = {
            modalVisible: true,
            password : "",
            loading : true,
            error_message: "",
            data : {}
        }

        this.loadData();
    }

    loadData(){
        this.attempts += 1
        DataManager.loadData(this.state.password).then(response => {
            this.setState({
                loading: false,
            });
            if (response["error"]){
                console.log(response["error_statement"])
                if (this.attempts > 1) {
                    this.setState({
                        error_message : "Wrong Password Brother",
                    })
                }
                this.setState({
                    modalVisible : false,
                    
                });
                this.openModal()
            }else {
                console.log("loaded success")
                this.setState({
                    modalVisible : false,
                });
                DataManager.getData("other").then(response => {
                    if (response["error"]){
                        this.setState({ redirect: "/" });
                    }else {
                        this.setState({
                            data : response["data"],
                        });
                    }
                }
                )
            }
        })

    }

    openModal() {
        this.setState({
            modalVisible : true
        });
    }

    closeModal(submit) {
        if (submit){
            this.setState({
                loading : true,
            });
            this.loadData()
        }else {
            this.setState({
                modalVisible : false,
            });
        }
    }

    handleChange(event) {
        this.setState({password: event.target.value})
    }
/* This was giving me an error so idk what to do with it

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    */

    
    linkStyle = {
        color: 'rgb(152, 30, 50)', 
        marginTop: "10px", 
        textAlign: "center"
    }

    jumbotronStyle = {
        marginTop: "30px", 
        backgroundColor: "rgba(255,255,255,0.8)",
        boxShadow: "0px 0px 14px -1px rgba(0,0,0,0.5)",
    }
    
    cardStyle = {
        boxShadow: "0px 0px 14px -1px rgba(0,0,0,0.5)",
        width: '100%'
    }

    /*
    Background is blurred for the user experience and does not increase security in any way
    Do not put confidential information on the landing page unless it requires a token to access
    */
    renderBlur(){
        if (this.state.modalVisible){
            return (<div style={{position: "absolute", left: "0px", top: "0px", width: "150%", height: "150%", backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.1)"}}></div>)
        }else {
            return ""
        }
    }

    renderModal(){                      
        if (!this.state.loading){
            return (
                <div>
                    {this.renderBlur()}
                <Modal visible={this.state.modalVisible} width="350" height="200" effect="fadeInUp" >
                    <Container style={{padding:"10px"}}>
                        <Row>
                            <Col>
                                <h1 style={{color:'black', textAlign: 'center'}}>Enter Password</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{textAlign: "center", color: "red"}}>{this.state.error_message}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input placeholder={"Password..."} style={{marginTop: "10px", width: "100%"}} type="text" value={this.state.password} onChange={this.handleChange.bind(this)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{marginTop: "10px"}} xs={{span: 4, offset: 4}}>
                                <a  href="javascript:void(0);" onClick={() => this.closeModal(true)}> 
                                    <Button variant="warning">Submit</Button>
                                </a>
                            </Col>
                        </Row>

                    </Container>
                </Modal>
                </div>
            )
        }else {
            return (
                <div>
                    {this.renderBlur()}
                    <Modal visible={this.state.modalVisible} width="350" height="200" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                        <img style={{width:"100%", height:"100%"}} src={akpsi_logo} className="App-logo" alt="logo" />
                    </Modal>
                </div>
        )
            
            
        }
        
    }
    render() {
        return (
            <div>
                <Canvas></Canvas>
                <Container>
                    <Row>
                        <Col>
                            <Jumbotron style={this.jumbotronStyle}>
                                <h1>Welcome to the Omega Theta Professional Portal</h1>
                                <p>
                                    The goal for this page is to be a home for OT's career development opportunities. You must be signed in to access the portal's data.
        If you have any suggestions or concerns about this website, feel free to email <strong>{this.state.data["alumni_email"]}</strong>.
        If you have any ideas for professional development, send them to <strong>{this.state.data["professional_email"]}</strong>
                                </p>
                                <p>
                                    Join the OT LinkedIn group!
                                </p>

                                <a target="_blank" href={this.state.data["linkedin_link"]}>
                                    <Button variant="outline-*" className="buttonColor">LinkedIn</Button>
                                </a>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card style={this.cardStyle}>
                                <Card.Img variant="top" src={stock_3} />
                                <Card.Body>
                                    <Card.Title>Job Opportunities</Card.Title>
                                    <Card.Text>
                                        Check out the latest job postings. Sort by company, position type, and more.
                                    </Card.Text>
                                    <Link to="/jobs">
                                        <Button variant="outline-*" className="buttonColor">Go to Jobs</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={this.cardStyle}>
                                <Card.Img variant="top" src={stock_4} />
                                <Card.Body>
                                    <Card.Title>Company Reviews</Card.Title>
                                    <Card.Text>
                                        Find reviews of working and interview experience at many companies.
                                    </Card.Text>
                                    <Link to="/reviews">
                                        <Button variant="outline-*" className="buttonColor">Go to Reviews</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={this.cardStyle}>
                                <Card.Img variant="top" src={stock_5} />
                                <Card.Body>
                                    <Card.Title>Submit a Post</Card.Title>
                                    <Card.Text>
                                        Do you have an opportunity or experience that you could share?
                                    </Card.Text>
                                    <Link to="/more">
                                        <Button variant="outline-*" className="buttonColor">Submit Posts</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={this.cardStyle}>
                                <Card.Img variant="top" src={stock_6} />
                                <Card.Body>
                                    <Card.Title>Find a Resume</Card.Title>
                                    <Card.Text>
                                        Sort through brothers' resumes by difference tracks and find your path.
                                    </Card.Text>
                                    <Link to="/resumes">
                                        <Button variant="outline-*" className="buttonColor">Go to Resumes</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {this.renderModal()}
                </Container>
            </div>
        )
        
    }
    
}



export default LandingPage