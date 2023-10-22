import React from 'react';
import { useParams } from 'react-router-dom';
import FormTemplate from './FormTemplate';

const EditForm = () => {

    const {id} = useParams()

    return (
        <div>
            <h1>Edit Transaction</h1>
            <FormTemplate id={id}/>
        </div>
    );
}

export default EditForm;
