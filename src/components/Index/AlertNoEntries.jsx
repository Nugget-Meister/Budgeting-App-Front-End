import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertNoEntries = () => {
    return (
        <Alert className='m-5'>
            <Alert.Heading>
               Uhh..
            </Alert.Heading>
            <hr />
            <p>No entries are here yet. Go make some!</p>
        </Alert>
    );
}

export default AlertNoEntries;
