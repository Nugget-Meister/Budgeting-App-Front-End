import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import FormTemplate from './FormTemplate';

const EditForm = () => {

    const {id} = useParams()

    return (
            <Container className='py-5'>
                <h1>Edit Transaction</h1>
                <FormTemplate id={id}/>
            </Container>

    );
}

export default EditForm;
