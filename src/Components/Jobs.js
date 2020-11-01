import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

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
                <h1 style={{marginTop: "70px", color: "black", textAlign: "center"}}>Job Opportunities</h1> 
                <p style={{textAlign: "center", color: "black"}}> Search for jobs posted by brothers </p>
                <AbstractPage type="jobs" filterStatus={this.filterStatus} filters={this.filters}></AbstractPage>
            </div>
       )
   }
}



export default Jobs