import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTransaction } from '../../helpers/apicalls';

const ShowDetails = () => {

    const {id} = useParams();
    const [transaction, setTransaction] = useState({})



    useEffect(() => {
        // getTransaction(id)
        // .then(res => setTransaction(res))
    
    }, [])

    return (
        <div className=''>
            {transaction != {} ? (
                
            )
            : null }
        </div>
    );
}

export default ShowDetails;
