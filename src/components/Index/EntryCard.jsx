import React from 'react';
import { Link } from 'react-router-dom';

const EntryCard = ({transaction}) => {
    return (
        <div className='EntryCard' key={transaction.id}>
            <Link to={`/${transaction.id}`}>
                <span>{transaction.date}</span><br />
                <span>{transaction.item_name}</span><br />
                <span>{transaction.amount}</span>
            </Link>
        </div>
    );
}

export default EntryCard;
