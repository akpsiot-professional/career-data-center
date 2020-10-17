import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
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