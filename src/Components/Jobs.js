import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Container } from 'react-bootstrap';
import ElementsList from './ElementsListComponents/ElementsList'

function Jobs() {
    return (
        <Container fluid className="App">
            <ElementsList elementType="Job"/>
        </Container>
    )
}

export default Jobs