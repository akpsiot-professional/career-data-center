import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

import 'react-widgets/dist/css/react-widgets.css';



class About extends React.Component{

    pStyle= {
        width: "100%",
        textAlign: "center"
    }

    divStyle = {
        width: "100%",
        marginTop: "300px"
    }
    render() {
        return (
            <div style={this.divStyle}>
                <p style={this.pStyle}>Here are our ideas/todo for the site. If you have any ideas/suggestions for how to improve the site, please email: <strong>alumni.akpsiot@gmail.com</strong></p>
                <p style={this.pStyle}>Rate my Professor</p>
                <p style={this.pStyle}>Homework/Test Database</p>
                <p style={this.pStyle}>Alumni Airtable Link</p>
            </div>
            
        )
    }
    
}



export default About