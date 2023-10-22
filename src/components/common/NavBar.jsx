import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar className='bg-body-secondary p-0'>
                <Container>
                    <Nav variant='underline'>
                        <Nav.Item>
                            <Nav.Link className="p-3" href="/">
                                Home
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Link to="/"> Bank of Githubbica</Link>
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
