import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { addTransaction, getTransaction, updateTransaction } from '../../helpers/apicalls';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';


const FormTemplate = ({id}) => {

    const navigate = useNavigate()

    const currentDateToHTML = () => {
        const date = new Date()
        const year = String(date.getFullYear()).padStart(4, '0')
        const month = String(date.getMonth()).padStart(2, '0')
        const thisDate  = String(date.getDate()).padStart(2, '0')

        const concat = `${year}-${month}-${thisDate}`
        return concat
    }

    const templateTransaction ={
        id: nanoid(4),
        item_name: "",
        amount: "",
        date: currentDateToHTML(),
        category: "Uncategorized",
        from: ""
    }

    const [transaction, setTransaction] = useState({...templateTransaction})


    useEffect(() => {

    if(id) {
        getTransaction(id)
        .then(res => setTransaction(res))
    }

    },[])
   

    const handleReset = () => {
       setTransaction({...templateTransaction})
    }

    const handleSubmit = (e) => {

        const handleNewEdit = () => {
            if(id != undefined){
                console.log(id)
                updateTransaction(id, transaction)
                .then(res => alert(`Updated ${transaction.item_name}.`))
                .then(after => navigate(`/${id}`))
                .catch(err => console.error(err))
            } 
            else {
                addTransaction(transaction)
                .then(res => {
                    if(res.status == 200) {
                        alert(`Added ${transaction.item_name}.`)
                        navigate('/')
                    }
                    else {
                        console.error(res.code)
                    }
                })
                .catch(err => {
                    console.error(err)
                })
            }
        }

        e.preventDefault()
        console.log(id ,transaction)

        handleNewEdit()


    }

    const handleChange = (e) => {
        console.log("s")
        setTransaction({
            ...transaction,
            [e.target.id]: e.target.value
        })
    }

    return (
        <div>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder='Entry Name'
                            id='item_name'
                            value={transaction.item_name}
                            onChange={handleChange}
                            required
                        />
                        <Form.Text className="text-muted">Please enter the name of the entry above.</Form.Text>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Amount</Form.Label>
                            <Form.Control placeholder='$0.00'
                                id='amount'
                                type='number'
                                value={transaction.amount}
                                step={'0.01'}
                                onChange={handleChange}
                                required
                            />
                            <Form.Text className="text-muted">The amount in $USD</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control placeholder='MM-DD-YYYY'
                            id='item_name'
                            type='date'
                            value={transaction.date}
                            onChange={handleChange}
                            required
                            />
                        <Form.Text className="text-muted">The date this transaction was made.</Form.Text>
                    </Form.Group> <br />
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control placeholder='Other'
                            id='category'
                            value={transaction.category}
                            onChange={handleChange}
                            required
                            />
                        <Form.Text className="text-muted">The category of the entry</Form.Text>
                    </Form.Group>
                    <br />
                    <Container className='d-flex justify-content-center'>
                        <Button 
                            className='m-2 px-4'
                            variant='primary'
                            type="submit">
                            Submit
                        </Button>
                        <Button 
                            className='m-2 px-3'
                            variant='danger'
                            onClick={handleReset}
                            type="reset">
                            Reset
                        </Button>
                        <Button 
                            className='m-2 px-4'
                            variant='outline-secondary'
                            onClick={()=> {navigate("/")}}>
                            Back
                        </Button>
                    </Container>
                </Form>
            </Container>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="item_name">Name</label>
                <input type="text" 
                    id="item_name"
                    value={transaction.item_name}
                    onChange={handleChange}
                    required
                    /><br />
                <label htmlFor="amount">Amount</label>
                <input type="number" 
                    id="amount"
                    value={transaction.amount}
                    onChange={handleChange}
                    required
                /><br />
                <label htmlFor="date">Date</label>
                <input type="date" 
                    id="date"
                    value={transaction.date}
                    onChange={handleChange}
                    required
                /><br />
                <label htmlFor="from">From</label>
                <input type="text" 
                    id="from"
                    value={transaction.from}
                    onChange={handleChange}
                    required
                /><br />
                <label htmlFor="">Category</label>
                <input type="text" 
                    id="category"
                    value={transaction.category}
                    onChange={handleChange}
                    required
                /><br />
            <button type="submit">Submit</button>
            <button type="reset" onClick={handleReset}>Reset</button>
            <button onClick={()=> {navigate("/")}}>Back</button>
            </form> */}
        </div>
    );
}

export default FormTemplate;
