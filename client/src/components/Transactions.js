import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

// pass in transaction prop, REMEMBER THIS IS A CHILD TO HISTORY.JS
export const Transactions = ({ transaction }) => {
  // access the deleteTransaction function from the globalstate
  const { deleteTransaction } = useContext(GlobalContext)
  // generates a - or +
  const sign = transaction.amount < 0 ? '-' : '+'
  const transactionColor = transaction.amount < 0 ? 'expense' : 'income';
  // display the text and amount
  // add functionality for the delete button, on click invoke deleteTransaction, passing in id
  return (
    <li className ={transactionColor}> 
    {transaction.text} {sign}${Math.abs(transaction.amount)} 
    <button onClick={() => deleteTransaction(transaction._id)}className="delete-btn">X</button>
    </li>
  )
}
