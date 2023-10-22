import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => {

    const navigate = useNavigate()
    return (
        <div className="animate__animated animate__fadeInDown">
            <Navbar className='bg-body-secondary p-0'>
                <Container>
                    <Nav variant='underline'>
                        <Nav.Item>
                            <Nav.Link className="p-3 animate__animated animate__fadeInLeft" href="/">
                                Home
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                <Container className='d-flex justify-content-center'>
                    <h1>Bank of Githubbica</h1>
                </Container>
                </Container>
                        <Button 
                            variant="outline-primary mx-2 my-2 animate__animated animate__fadeInRight"
                            onClick={() => {navigate("/new")}}
                            >
                            New Entry
                        </Button>
            </Navbar>
        </div>
    );
}

export default NavBar;
