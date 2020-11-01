import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Combobox } from 'react-widgets'



// TODO: add props that let us specify whether we want a job postings list or a reviews list
function Filter(props) {
    return (
            <Container fluid style={{paddingBottom: "20px", marginBottom: "30px", marginLeft: "-15px", borderBottom: "1px solid rgba(0,0,0,0.2)"}}>
                <Row>
                    {props.filters.map((key, __) => (
                        <Col>
                            <p style={{fontSize: "10px", marginBottom: "0px", color: 'rgb(152, 30, 50)'}}>{removeUnderscore(key)}</p>
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