import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTransaction } from '../../helpers/apicalls';
import DetailsCard from './DetailsCard';

const ShowDetails = () => {

    const {id} = useParams();
    const [transaction, setTransaction] = useState({})



    useEffect(() => {
        getTransaction(id)
        .then(res => setTransaction(res))
    
    }, [])

    return (
        <div className='ShowDetails'>
            {transaction != {} ? (
                <DetailsCard transaction={transaction}/>
            )
            : null }
        </div>
    );
}

export default ShowDetails;
