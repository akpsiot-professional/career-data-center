import React from 'react';
import { Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">AKPsi Professional Portal</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#jobs">Jobs</Nav.Link>
                <Nav.Link href="#reviews">Reviews</Nav.Link>
                <Nav.Link href="#resumes">Resumes</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default App;