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
            <AbstractPage type="jobs" filterStatus={this.filterStatus} filters={this.filters}></AbstractPage>
       )
   }
}



export default Jobs