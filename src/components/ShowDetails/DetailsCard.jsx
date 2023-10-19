import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { deleteTransaction } from '../../helpers/apicalls';
import { useNavigate } from 'react-router-dom';

const DetailsCard = ({transaction}) => {

    const {id} = useParams()
    const navigate = useNavigate()

    const deleteEntry = (id) => {
        console.log(id)
        
        if(confirm(`Delete ${transaction.item_name}?`)) {
            deleteTransaction(transaction.id)
            .then(res => {
                if(res.status) {
                    alert(` ${res.status} | Failed to delete item.`)
                }else {
                    alert(`${transaction.item_name} has been deleted.`)
                    navigate("/")
                }
            })
            .catch( err => {
                console.error(err)
            })
        }
    }

    return (
        <div className='DetailsCard'>
            <section>
                <span>
                    {transaction.item_name}
                </span>
                <span>
                    {transaction.amount}
                </span>
                <span>
                    {transaction.date}
                </span>
                <span>
                    {transaction.from}
                </span>
                <span>
                    {transaction.category}
                </span>
            </section>
            <Link to="/">
                <button>Back</button>
            </Link>
            <Link to={`/${id}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={() => deleteEntry(transaction.id)}>Delete</button>
        </div>
    );
}

export default DetailsCard;
