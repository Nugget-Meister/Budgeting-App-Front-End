import React from 'react';
import { Container, Spinner, Alert } from 'react-bootstrap';
// import "./style/LoadingAlert.css"

const AlertLoading = ({className}) => {

    return (
        <Container className={`AlertLoading ${className}`}>
                <br />
                <Alert 
                    variant="info">
                        <Alert.Heading className='d-flex justify-content-between'>
                             <span className='loadingAnim'/>
                                {`Loading transactions...`} 
                             <span className='loadingAnim'/>
                        </Alert.Heading>
     
                </Alert>
                <Container className='d-flex justify-content-center p-5'>
                <Spinner 
                    variant="secondary"
                    animation="border"/>
            </Container>
        </Container>
    );
}

export default AlertLoading;
