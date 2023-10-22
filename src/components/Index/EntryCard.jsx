import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EntryCard = ({transaction}) => {
    const navigate = useNavigate()
    return (
        <tr 
            className='EntryCard'
            onClick={() => navigate(`/${transaction.id}`)}
            key={transaction.id}> 
                    <td className=''></td>
                    <td>{transaction.date}</td>
                    <td className={`${transaction.amount > 0 ? "text-success": "text-danger"}`}>$ {Number(transaction.amount).toFixed(2)}</td>
                    <td>{transaction.item_name}</td>
        </tr>
    );
}

export default EntryCard;
