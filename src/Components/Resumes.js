import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import AbstractPage from './AbstractPage'

import 'react-widgets/dist/css/react-widgets.css';



class Resumes extends React.Component{
    constructor(props){
        super(props)
        this.filterStatus = {}
        this.filters = ["track", "positions"]
        this.filters.forEach(element => {
            this.filterStatus[element] = "All";
        });
        
    }

    render() {
        return (
            <div>
                <h1 style={{marginTop: "70px", color: "black", textAlign: "center"}}>Brother Resumes</h1> 
                <p style={{textAlign: "center", color: "black"}}>Find Resumes based on career paths</p>
                <AbstractPage type="resumes" filterStatus={this.filterStatus} filters={this.filters}></AbstractPage>
            </div>
        )
    }
    
}



export default Resumes