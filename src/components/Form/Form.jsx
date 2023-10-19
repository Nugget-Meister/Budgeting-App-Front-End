import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { addTransaction, getTransaction, updateTransaction } from '../../helpers/apicalls';
import { useNavigate } from 'react-router-dom';

const Form = ({id}) => {

    const navigate = useNavigate()

    const templateTransaction ={
        id: nanoid(4),
        item_name: "",
        amount: 0,
        date: "",
        category: "",
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
        e.preventDefault()
        console.log(id ,transaction)

        if(id != undefined){
            console.log(id)
            updateTransaction(id, transaction)
            .then(res => alert(`Updated ${transaction.item_name}.`))
            .then(after => navigate("/"))
            .catch(err => console.error(err))
        } 
        else {
            console.log("No Id")
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
                console.error("Failed")
            })
        }

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
            <form onSubmit={handleSubmit}>
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
            </form>
        </div>
    );
}

export default Form;
