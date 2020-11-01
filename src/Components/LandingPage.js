import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Container, Row, Col, Jumbotron, Button, Card} from 'react-bootstrap';
import Modal from './modal/src';
import DataManager from '../DataManager'
import akpsi_logo from '../akpsi_logo.svg';

import Canvas from './Canvas'

import stock_3 from '../images/stock_3.jpg'
import stock_4 from '../images/stock_4.jpg'
import stock_5 from '../images/stock_5.jpg'

import 'react-widgets/dist/css/react-widgets.css';



class LandingPage extends React.Component{
    constructor(props){
        super(props)
        this.type = props.type
        this.attempts = 0
        this.state = {
            modalVisible: false,
            password : "",
            loading : false,
            error_message: "",
        }

        this.loadData();
    }

    loadData(){
        this.attempts += 1
        this.setState({
            loading : true,
        });
        DataManager.loadData(this.state.password).then(response => {
            this.setState({
                loading: false,
            });
            if (response["error"]){
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
/*
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

    renderModal(){
        if (!this.state.loading){
            return (
                <Modal visible={this.state.modalVisible} width="350" height="200" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <Container>
                        <Row>
                            <Col>
                                <h1 style={{color:'black', textAlign: 'center'}}>Enter Password</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input style={{marginTop: "30px", width: "100%"}} type="text" value={this.state.password} onChange={this.handleChange.bind(this)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{textAlign: "center", color: "red"}}>{this.state.error_message}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                                <a  href="javascript:void(0);" onClick={() => this.closeModal(false)}><p style={this.linkStyle}>Close</p></a>
                            </Col>
                            <Col xs={{span: 4, offset: 4}}>
                                <a  href="javascript:void(0);" onClick={() => this.closeModal(true)}> <p style={this.linkStyle}>Submit</p></a>
                            </Col>
                        </Row>

                    </Container>
                </Modal>
            )
        }else {
            return (
                <Modal visible={this.state.modalVisible} width="350" height="200" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <img src={akpsi_logo} className="App-logo" alt="logo" />
                </Modal>
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
                                    If you have any suggestions or concerns about this website, feel free to email <strong>alumni.akpsiot@gmail.com</strong>.
                                    If you have any ideas for professional development, send them to <strong>professional@akpsi-umd.org</strong>
                                </p>
                                <Button variant="primary">This button does nothing :(</Button>
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
                                    <a href="/jobs">
                                        <Button>Go to Jobs</Button>
                                    </a>
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
                                    <a href="/reviews">
                                        <Button>Go to Reviews</Button>
                                    </a>
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
                                    <a href="/more">
                                        <Button>Submit Posts</Button>
                                    </a>
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