import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Container></Container>
            <Navbar className='bg-body-secondary p-0'>
                <Container>
                    <Nav variant='underline'>
                        <Nav.Item>
                            <Nav.Link className="p-3" href="/">
                                Home
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                <Container className='d-flex justify-content-center'>
                    <h1>Bank of Githubbica</h1>
                </Container>
                </Container>
                    <Nav.Link href="/new">
                        <Button variant="outline-primary mx-2 my-2">
                            New Entry
                        </Button>
                    </Nav.Link>
            </Navbar>
        </div>
    );
}

export default NavBar;
