import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';
import ElementsList from './ElementsListComponents/ElementsList'
import Modal from './modal/src';
import DataManager from '../DataManager'
import akpsi_logo from '../akpsi_logo.svg';



class Jobs extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            modalVisible: false,
            data: [],
            password : null
        }
        this.loadData("not implemented yet", null)
    }

    loadData(){
        console.log(this.state.password)
        DataManager.getData("1", this.state.password).then(response => {
            if (response["error"]){
                this.openModal()
            }else {
                this.setState({
                    data : response,
                });
            }
        }
        )
    }

    openModal() {
        this.setState({
            modalVisible : true
        });
    }

    closeModal(submit) {
        this.setState({
            modalVisible : false,
        });
        if (submit){
            this.loadData()
        }
        
    }

    handleChange(event) {
        this.setState({password: event.target.value})
      }


    render() {
        if (this.state.data.length == 0){
            return (
                <Container fluid className="App">
                    <Row>
                        <Col sm={12}>
                        <img src={akpsi_logo} className="App-logo" alt="logo" />
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <a href="javascript:void(0);" onClick={() => this.loadData()}>Reload Data</a>
                        </Col>
                    </Row>
                    
                    
                    <Modal visible={this.state.modalVisible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                        <div>
                            <h1 style={{color:'black'}}>Enter Password</h1>
                            <input style={{marginTop: "50px"}} type="text" value={this.state.password} onChange={this.handleChange.bind(this)}/>
                            <a style={{marginRight: "50px"}} href="javascript:void(0);" onClick={() => this.closeModal(false)}>Close</a>
                            <a href="javascript:void(0);" onClick={() => this.closeModal(true)}>Submit</a>
                        </div>
                    </Modal>
                </Container>  
                
            )
        }else {
            return (
                <Container fluid className="App">
                    <Modal visible={this.state.modalVisible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                        <div>
                            <h1 style={{color:'black'}}>Enter Password</h1>
                            <input style={{marginTop: "50px"}} type="text" value={this.state.password} onChange={this.handleChange.bind(this)}/>
                            <a style={{marginRight: "50px"}} href="javascript:void(0);" onClick={() => this.closeModal(false)}>Close</a>
                            <a href="javascript:void(0);" onClick={() => this.closeModal(true)}>Submit</a>
                        </div>
                    </Modal>
                    <ElementsList elementType="jobs" data={this.state.data}/>
                </Container>
            )
        }
        
    }
    
}

export default Jobs