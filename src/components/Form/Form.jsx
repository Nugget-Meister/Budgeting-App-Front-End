import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { addTransaction, getTransaction, updateTransaction } from '../../helpers/apicalls';

const Form = ({id}) => {

    const templateTransaction ={
        id: nanoid(4),
        item_name: "",
        amount: 0,
        date: "",
        category: ""
    }

    const [transaction, setTransaction] = useState({...templateTransaction})

    if(id) {
        getTransaction(id)
        .then(res => setTransaction(res))
    }

    const handleReset = () => {
       setTransaction({...templateTransaction})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(transaction)

        if(id)

        // switch(type){
        //     case "new":
        //         addTransaction(transaction)
        //         break;
        //     case "edit":
        //         updateTransaction(transaction.id, transaction)
        //         break;
        //     default:
        //         alert("Invalid state detected. Please refresh page. \nIf issue persists, please contact host.")
        // }
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
                    /><br />
                <label htmlFor="amount">Amount</label>
                <input type="text" 
                    id="amount"
                    value={transaction.amount}
                    onChange={handleChange}
                /><br />
                <label htmlFor="date">Date</label>
                <input type="date" 
                    id="date"
                    value={transaction.date}
                    onChange={handleChange}
                /><br />
                <label htmlFor="from">From</label>
                <input type="text" 
                    id="from"
                    value={transaction.from}
                    onChange={handleChange}
                /><br />
                <label htmlFor="">Category</label>
                <input type="text" 
                    id="category"
                    value={transaction.category}
                    onChange={handleChange}
                /><br />
            <button type="submit">Submit</button>
            <button type="reset" onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
}

export default Form;
