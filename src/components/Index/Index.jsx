import React, { useEffect, useState } from 'react';
import { getAllTransactions } from '../../helpers/apicalls';
import EntryCard from './EntryCard';
import NoEntries from './NoEntries';

import { Table } from 'react-bootstrap';


const Index = () => {



    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        getAllTransactions()
        .then(res => setTransactions(res))
    }, [])

    return (
        <div className='Index' id="index">
            {transactions.length > 0 ? (
            <>
                <Table>
                    {transactions.map((transaction) => {
                        return (<EntryCard transaction={transaction}/>)
                    })}
                </Table>
            </>
            )
            : <NoEntries/>}
        </div>
    );
}

export default Index;
