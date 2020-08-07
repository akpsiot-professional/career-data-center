import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Container } from 'react-bootstrap';
import ElementsList from './ElementsListComponents/ElementsList'

function Reviews() {
    return (
        <Container fluid className="App">
            <ElementsList elementType="Review"/>
        </Container>
    )
}

export default Reviews