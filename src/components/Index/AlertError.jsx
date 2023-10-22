import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';

const AlertError = () => {
      // Links
      const issueLink = "https://github.com/Nugget-Meister/Budgeting-App-Front-End/issue"

    return (
        <>
            <Container className='AlertError p-5'>
                <Alert 
                    className='m-5'
                    variant="danger">
                        <Alert.Heading>Oops!</Alert.Heading>
                        <hr />
                        <p>It looks like we ran into an error. <strong>Please refresh the page and try again.</strong></p>
                        <hr />
                        <p className='mb-1'>
                            {`If the issue persists, you can contact the author here `}
                            <Link to={issueLink}>@Nugget-Meister</Link>
                        </p>
                </Alert>
            </Container>
        </>
    );
}

export default AlertError;
