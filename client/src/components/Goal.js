import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Goal = () => {
  const { goal, getGoal, total } = useContext(GlobalContext)
  useEffect(() => {
    getGoal();
  }, [])

  useEffect(() => {
    if (total >= goal.goal) {
      alert("Congratulations you've reached your goal! Keep it going and set a new one!");
    }
  }, [total, goal.goal]);

  const percentage = Math.floor(((total / goal.goal) * 100))
  const transactionColor = total < 0 ? 'expense' : 'income';
  const message = function () {
    if (total < 0) {
      return "Oh no you're in the red!"
    } else if (total >= Number(goal.goal)) {
      return 'Congrats on hitting your goal!'
    } else if (total === 0) {
      return 'Start saving today!'
    } else {
      return `${percentage}% of the way to your goal!`
    }
  }
  return (
    <div className="goal">
      <h3>Goal</h3>
      <h1> ${Number(goal.goal).toFixed(2)} </h1>
      <div className ={transactionColor}>
      {message()}
      </div>
      </div>
  )
}
