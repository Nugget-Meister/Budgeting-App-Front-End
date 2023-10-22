import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { deleteTransaction } from '../../helpers/apicalls';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

// Images
import asset from "../../img/asset.jpg"
import expense from "../../img/expense.jpg"

const DetailsCard = ({transaction}) => {

    const {id} = useParams()
    const navigate = useNavigate()
    const positive = transaction.amount > 0

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

            <Card className=''> 
                <Card.Img className="animate__animated animate__fadeInLeft" variant="top" src={positive ? asset: expense}/>
                <Card.Body className='p-5 animate__animated animate__fadeInRight'>
                    <Card.Title 
                        className='d-flex flex-row-reverse bd-highlight'>
                            <p className=''>{`${transaction.category} `}</p>
                            <p className='h1 px-3'>{`|`}</p>
                            <p className='h1'>{transaction.item_name}</p>
                    </Card.Title>
                    {/* <Card.Title 
                        className='d-flex flex-row-reverse bd-highlight'>
                            <p className='h5'>{transaction.category}</p>
                    </Card.Title> */}
                    <hr />
                    <Card.Text 
                        className='d-flex flex-row-reverse bd-highlight'>
                            {transaction.date}
                    </Card.Text>
                    <Card.Title 
                        className={`d-flex flex-row-reverse bd-highlight ${positive ? "text-success" : "text-danger"}`}>
                            ${transaction.amount}
                    </Card.Title>
                    <Card.Text 
                        className='d-flex flex-row-reverse bd-highlight'>
                            {`From: ${transaction.from}`}
                    </Card.Text>
                    <hr />
                <section className='animate__animated animate__fadeInUp d-flex flex-row-reverse bd-highlight'>
                    <Button 
                        variant="outline-secondary"
                        className='px-3'
                        onClick={() => {navigate("/")}}>
                        Back
                    </Button>
                    <Button
                        variant='outline-primary mx-2 '
                        onClick={()=> {navigate(`/${id}/edit`)}}
                    >
                        Edit
                    </Button>
                    <Button
                        variant='danger'
                        className='px-2 mx-3'
                        onClick={() => deleteEntry(transaction.id)}
                    >
                        Delete
                    </Button>
                </section>
                </Card.Body>
            </Card>

    );
}

export default DetailsCard;
