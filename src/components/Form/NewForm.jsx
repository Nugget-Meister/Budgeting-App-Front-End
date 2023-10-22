import React from 'react';
import FormTemplate from './FormTemplate';
import { Container } from 'react-bootstrap';

const NewForm = () => {
    return (
        <Container className='py-5 overflow-hidden animate__animated animate__fadeInUp'>
            <h1 className=''>New Transaction</h1>
            <FormTemplate/>
        </Container>

    );
}

export default NewForm;
