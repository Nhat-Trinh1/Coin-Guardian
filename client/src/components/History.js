import React, { useContext, useEffect } from 'react'
import { Transactions } from './Transactions'
// allows us to access state needs to be used in combination with usedContext
import { GlobalContext } from '../context/GlobalState'

export const History = () => {
  // invoke useContext with GlobalContext passed into it, assign it to a variable
  // this will give the variable the value prop of the GlobalContext.Provider
  const { transactions, getTransaction } = useContext(GlobalContext)
  // use useEffect whenever making a api request in a component
  // useEffect takes in a function and a dependency array
  // the code will only run when something in the dependency array changes, if it's empty it will run once
  // 
  useEffect(() => {
    getTransaction();
  }, [])
  return (
    <div className='big-transaction-container'>
    <h3>Transaction History</h3>
    <div className="transaction-container">
    <ul>
      {transactions.map(element => (
        <Transactions key={element._id} transaction={element}/>
      ))}
    </ul>
    </div>
    </div>
  )
}
