import React from 'react';
import { Navbar, Nav, Tab, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Combobox } from 'react-widgets'



// TODO: add props that let us specify whether we want a job postings list or a reviews list
function Filter(props) {
    console.log(props)
    return (
        <div>
            {props.filters.map((key, __) => (
                <div style={{display: "inline-block"}}>
                <Combobox style={{width: "200px"}}data={parseSelection(key, props.data)} onChange={value => props.change(key, value)} caseSensitive={false} filter='contains' placeholder={key} />
                </div>
            ))}
            <a href="javascript:void(0);" onClick={() => props.filter()}>Filter</a>
          </div>
    )
}

function parseSelection(key, data){
    var set = new Set()
    set.add("All")
    data.forEach(element => {
        try {
            set.add(element[key])
        }catch {
        }
        
    });
    return Array.from(set)
}



export default Filter;