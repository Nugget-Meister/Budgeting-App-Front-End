import React, { useEffect, useState } from 'react';
import EntryCard from './EntryCard';
import { getAllTransactions } from '../../helpers/apicalls';
import NoEntries from './NoEntries';


const Index = () => {



    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        getAllTransactions()
        .then(res => setTransactions(res))
    }, [])

    return (
        <div className='Index' id="index">
            {transactions.length > 0 ? 
            transactions.map((transaction) => {
                return (<EntryCard transaction={transaction}/>)
            }): <NoEntries/>}
        </div>
    );
}

export default Index;
