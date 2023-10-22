import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const EntryCard = ({transaction}) => {
    return (
        <div className='EntryCard' key={transaction.id}>
            <Card>
                <Link to={`/${transaction.id}`}>
                    <span>{transaction.date}</span><br />
                    <span>{transaction.item_name}</span><br />
                    <span>{transaction.amount}</span>
                </Link>
            </Card>
        </div>
    );
}

export default EntryCard;
