import React, { useEffect, useState } from 'react';
import { getAllTransactions } from '../../helpers/apicalls';
import EntryCard from './EntryCard';
import NoEntries from './NoEntries';

import ErrorAlert from './ErrorAlert';
import LoadingAlert from './LoadingAlert';

import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { Spinner, Alert } from 'react-bootstrap';

const Index = () => {

    // Links
    const issueLink = "https://github.com/Nugget-Meister/Budgeting-App-Front-End/issue"


    const navigate = useNavigate()

    const [transactions, setTransactions] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)

    useEffect(() => {
        setTimeout(() => getAPIResponse(),"3000")
    }, [])

    const getAPIResponse = () => {
        getAllTransactions()
        .then(res => {
            setTransactions(res)
            setLoading(false)
            setError(false)
        })
        .catch(err => {
            setLoading(false)
            setError(true)
            console.error(err)
        })
    }

    return (
        <div className='Index' id="index">
            <LoadingAlert />
            {isLoading ? (
                <LoadingAlert/>
            ): ""}
            {isError ? (
                <ErrorAlert/>
            ): ""}


            {transactions.length > 0 ? (
            <Container>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => {
                            return (<EntryCard transaction={transaction}/>)
                        })}
                    </tbody>
                </Table>
                <Container className='d-flex justify-content-center'>
                    <Button 
                        className='px-5'
                        variant='outline-primary'
                        onClick={() => navigate("/new")}
                        >+</Button>
                </Container>
                
            </Container>
            )
            : <NoEntries/>}
        </div>
    );
}

export default Index;
