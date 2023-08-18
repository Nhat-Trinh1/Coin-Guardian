import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
// uuid allows us to generate unique ids

export const Add = () => {
  // set the initial state for text and amount to empty
  // extract addTransaction from globalstate
  const [goal, setGoal] = useState('')
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const { addTransaction } = useContext(GlobalContext);
  const { setNewGoal } = useContext(GlobalContext);

  const onSubmit = e => {
    //Prevents the form's default submission behavior.
    e.preventDefault();

    // create a new object with the inputted values
    const newTransaction = {
      text,
      //+ converts the amount string into a number
      amount: +amount
    };

    //pass the object into the addTransaction action in Globalstate
    addTransaction(newTransaction);
  }

  const onSubmitTwo = e => {
    //Prevents the form's default submission behavior.
    e.preventDefault();

    // create a new object with the inputted values
    const newGoal = {
      goal: +goal
    }
    //pass the object into the addTransaction action in Globalstate
    setNewGoal(newGoal);
  }
  // create to input elemets, one for text and one for amount
  // the value of those will be text state and amount state
  // when there is a change in the input fields, invoke setState to change text and amount
  // when the form is submitted, it will take the text and amount value and pass it into the onSubmit function
  return (
    <div>
      <div className='add'><h3>Add Transaction</h3></div>
      <form onSubmit={onSubmitTwo}>
      <div>
          <label className="label1">What is your goal?</label>
          <input type="number" value={goal} onChange = {(e) => setGoal(e.target.value)}placeholder="Enter amount..." />
        </div>
        <button>Set Goal</button>
      </form>
      <form onSubmit={onSubmit}>
        <div>
          <label className="label2">What is this transaction?</label>
          <input type="text" value={text} onChange = {(e) => setText(e.target.value)}placeholder="Enter text..." />
        </div>
        <div>
          <label className="label3">How much was it?</label>
          <input type="number" value={amount} onChange = {(e) => setAmount(e.target.value)}placeholder="Enter amount..." />
        </div>
        <button>Add Transaction</button>
      </form>
      </div>
  )
}
