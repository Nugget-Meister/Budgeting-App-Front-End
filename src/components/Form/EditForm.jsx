import React from 'react';
import { useParams } from 'react-router-dom';
import Form from './Form';

const EditForm = () => {

    const {id} = useParams()

    return (
        <div>
            <h1>Edit Transaction</h1>
            <Form id={id}/>
        </div>
    );
}

export default EditForm;
