import React from 'react';
import { Container, Navbar, Nav, Tab, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Combobox } from 'react-widgets'



// TODO: add props that let us specify whether we want a job postings list or a reviews list
function Filter(props) {
    return (
            <Container fluid style={{marginBottom: "30px"}}>
                <Row>
                    {props.filters.map((key, __) => (
                        <Col>
                            <p style={{fontSize: "10px", marginBottom: "0px"}}>{removeUnderscore(key)}</p>
                            <Combobox style={{width: "100%"}}data={parseSelection(key, props.data)} onChange={value => props.change(key, value)} caseSensitive={false} filter='contains' placeholder="All" />
                        </Col>
                    ))}
                </Row>
                
            </Container>
    )
}

function removeUnderscore(key){
    const regex = /_/
    return key.replace(regex, ' ')
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