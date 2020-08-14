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

import 'react-widgets/dist/css/react-widgets.css';



class Reviews extends React.Component{
    constructor(props){
        super(props)
        this.filterStatus = {"company_title": "All"}
        this.filters = ["company_title"]
    }

    render() {
        return (
            <AbstractPage type="reviews" filterStatus={this.filterStatus} filters={this.filters}></AbstractPage>
        )
    }
    
}



export default Reviews