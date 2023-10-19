// Remember to refactor the api url in the .env file before you submit/deploy page!!!!

const URL = import.meta.env.VITE_API_URL

const getAllTransactions = () => {
    return fetch(URL)
    .then(res => res.json())
    .catch(err => console.error(err))
    
}

const getTransaction = (id) => {
    return fetch(`${URL}/${id}`)
    .then(res => res.json())
    .catch(err => console.error(err))
}

const addTransaction = (data) => {
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    }

    return fetch(URL, options)
    .then(res => res.json())
    .catch(err => console.error(err))     
}

const updateTransaction = (id, data) => {
    const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    }

    return fetch(`${URL}/${id}`, options)
    .then(res => res.json())
    .catch(err => console.error(err)) 

}

const deleteTransaction = (id) => {
    const options = {
        method: "DELETE"
    }

    return fetch(`${URL}/${id}`, options)
    .then(res => { 
        if(res.status != 200) {
            return res
        } else {
            return res.json()
        }
    })
    .catch(err => console.error(err)) 
}

export {
    getAllTransactions,
    getTransaction,
    addTransaction,
    updateTransaction,
    deleteTransaction
}
