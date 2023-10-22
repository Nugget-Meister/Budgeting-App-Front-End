import React, { useEffect, useState } from 'react';
import { getAllTransactions } from '../../helpers/apicalls';
import EntryCard from './EntryCard';




import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

import AlertLoading from './AlertLoading';
import AlertError from './AlertError';
import AlertNoEntries from './AlertNoEntries';

const Index = () => {

    // Links
    const issueLink = "https://github.com/Nugget-Meister/Budgeting-App-Front-End/issue"

    const navigate = useNavigate()

    const [transactions, setTransactions] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    const [loadScreen, setloadScreen] = useState(<AlertLoading className='animate__animated animate__bounceInDown'/>)

    useEffect(() => {
        // setTimeout(() => getAPIResponse(),"3000")
    }, [])

    useEffect(() => {
        setloadScreen(<AlertLoading className='animate__animated animate__bounceOutUp'/>)
        setTimeout(() => setloadScreen(null),"800")
    },[isLoading])

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
            {isLoading ? (
                <AlertLoading className='animate__animated animate__bounceInDown'/>
            ): 
            loadScreen
            }
            {isError ? (
                <AlertError/>
            ): ""}



            {transactions.length > 0  && loadScreen == (null) ? (
            <Container className='animate__animated animate__fadeInUp'>
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
            : <AlertNoEntries/>}
        </div>
    );
}

export default Index;
