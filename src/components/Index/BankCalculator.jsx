import React from 'react';
import { Container, Alert } from 'react-bootstrap';
const BankCalculator = ({transactions}) => {

        // transactions = [{amount: "-122"}, {amount: "3.90"}]
      let sum = 0;

    if(transactions && transactions != []) {
        const transactionValues = transactions.map((transaction) => {
            return Number(transaction.amount) || 0
        })
        
        sum = transactionValues.reduce((add, now) => add + now, 0)
    } 

    return (
    <Container className='py-4'>
        <Alert
            className='d-flex justify-content-center h1 animate__animated animate__fadeInDown'
            variant={sum > 100 ? "success": sum >= 0 ? "warning": "danger"}
        >
            {`Balance: $ ${sum.toFixed(2)}`}
        </Alert>
    </Container>
    );
}

export default BankCalculator;
