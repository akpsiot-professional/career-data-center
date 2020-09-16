import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';
import ElementsList from './ElementsListComponents/ElementsList'
import Modal from './modal/src';
import Filter from './Filter'
import DataManager from '../DataManager'
import akpsi_logo from '../akpsi_logo.svg';
import { Combobox } from 'react-widgets'

import AbstractPage from './AbstractPage'




class Jobs extends React.Component{
    constructor(props){
        super(props)
        this.filterStatus = {"company_type": "All", "position_title": "All"}
        this.filters = ["company_type", "position_title"]
        
    }

   render() {
       return (
           <div>
                <h1 style={{marginTop: "80px", color: "black", textAlign: "center"}}>Job Opportunities</h1> 
                <p style={{textAlign: "center", color: "black"}}> Search for jobs posted by brothers </p>
                <AbstractPage type="jobs" filterStatus={this.filterStatus} filters={this.filters}></AbstractPage>
            </div>
       )
   }
}



export default Jobs