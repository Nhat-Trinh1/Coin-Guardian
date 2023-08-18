import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  // import the transactions prop from GlobalState
  const { total, goal } = useContext(GlobalContext)
  const transactionColor = function () {
    if (total < 0) {
      return 'expense'
    } else if (total > 0) {
      return 'income'
    } else {
      return ''
    }
  }
  return (
    <div>
      <h3>Account Balance</h3>
      <h1 className = {transactionColor()}> ${total.toFixed(2)}</h1>
    </div>
  )
}
