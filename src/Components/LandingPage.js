import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';
import ElementsList from './ElementsListComponents/ElementsList'
import Modal from './modal/src';
import Filter from './Filter'
import DataManager from '../DataManager'
import akpsi_logo from '../akpsi_logo.svg';

import 'react-widgets/dist/css/react-widgets.css';

class LandingPage extends React.Component{
    constructor(props){
        super(props)
        this.type = props.type
        this.state = {
            modalVisible: false,
            password : "",
        }

        this.loadData();
    }

    loadData(){
        DataManager.loadData(this.state.password).then(response => {
            if (response["error"]){
                console.log(response["error_statement"])
                this.openModal()
            }else {
                console.log("loaded success")
            }
        })
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

    

    


    renderModal(){
        return (
            <Modal visible={this.state.modalVisible} width="350" height="200" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                <div>
                    <h1 style={{color:'black'}}>Enter Password</h1>
                    <input style={{marginTop: "50px", width: "60%"}} type="text" value={this.state.password} onChange={this.handleChange.bind(this)}/><br></br>
                    <div style={{marginTop: "20px"}}>
                        <a style={{marginRight: "100px"}} href="javascript:void(0);" onClick={() => this.closeModal(false)}>Close</a>
                        <a href="javascript:void(0);" onClick={() => this.closeModal(true)}>Submit</a>
                    </div>
                </div>
            </Modal>
        )
    }


    render() {
        return (
            <div>
                <p style={{"marginTop": "300px"}}> Landing Page</p>
                {this.renderModal()}
            </div>
        )
        
    }
    
}



export default LandingPage