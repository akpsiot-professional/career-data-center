import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import AbstractPage from './AbstractPage'

import 'react-widgets/dist/css/react-widgets.css';

class Reviews extends React.Component{
    constructor(props){
        super(props)
        this.filterStatus = {}
        this.filters = ["company_title", "company_type", "position_title", "difficulty_level"]
        this.filters.forEach(element => {
            this.filterStatus[element] = "All";
        });
        
    }

    render() {
        return (
            <div>
                <h1 style={{marginTop: "70px", color: "black", textAlign: "center"}}>Company Reviews</h1> 
                <p style={{textAlign: "center", color: "black"}}> Search for work and interview experience posts from brothers</p>
                <AbstractPage type="reviews" filterStatus={this.filterStatus} filters={this.filters}></AbstractPage>
            </div>
        )
    }
    
}



export default Reviews