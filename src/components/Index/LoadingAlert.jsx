import React from 'react';
import { Container, Spinner, Alert } from 'react-bootstrap';
import "./style/LoadingAlert.css"

const LoadingAlert = () => {
    return (
        <Container>
            <Container className='d-flex justify-content-center p-5'>
                <Spinner 
                    variant="secondary"
                    animation="border"/>
            </Container>
                <br />
                <Alert 
                    className='d-flex justify-content-center '
                    variant="info">
                        <span className='loadingAnim'>
                            {`Spinning up the money zones`} 
                        </span>
                </Alert>
        </Container>
    );
}

export default LoadingAlert;
