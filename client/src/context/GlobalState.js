// createContext allows us to pass data down to components
// useReducer takes in a reducer function and an initial state and helps manage state similarly to Redux
import React, { createContext, useReducer} from 'react'
// imports reducer from AppReducer
import AppReducer from './AppReducer';
// imports axios so that you can that you can make http requests
import axios from 'axios';

//set initialState to empty
const initialState = {
  goal: 0,
  transactions: [],
  // holds any error message that might occur in an async operation
  error: null,
  // loading is set to true at the beginning of an async operation
  // changes to false once it's done
  // allows users to know data is being fetched
  loading: true
}

// creates a context of the initial state and assign it to GlobalContext, this allows initialState to be accessed in other components
// When you create a context using createContext(), React gives you Provider component, ie you can do GlobalContext.Provider
// The Provider allows you to set and distribute the context value to child components, 
// while the Consumer (or the useContext hook) allows child components to tap into or "consume" the context value.
export const GlobalContext = createContext(initialState)

// Provider to wrap children components
// children will refer to any content placed between the opening and closing tags of the GlobalProvider component
export const GlobalProvider = ({ children }) => {
  // useReducer is similar to useState
  // it takes in a reducer function and initial state
  // it returns an array with the updated state and dispatcher function
  // when an action is invoked, state here will be updated and passed down to children
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransaction () {
    try {
      const res = await axios.get('http://localhost:3000/api/transactions');
      dispatch({
        type: 'GET_TRANSACTION',
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: 'ERROR_TRANSACTION',
        payload: error
      })
    }
  }
  
  async function deleteTransaction(id) {
    try {
      await axios.delete(`http://localhost:3000/api/transactions/${id}`)
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      })
      
    } catch (error) {
      dispatch({
        type: 'ERROR_TRANSACTION',
        payload: error
      })
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('http://localhost:3000/api/transactions', transaction, config)
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: 'ERROR_TRANSACTION',
        payload: error
      })
    }
  }
  async function getGoal () {
    try {
      const res = await axios.get('http://localhost:3000/api/goal');
      dispatch({
        type: 'GET_GOAL',
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: 'ERROR_TRANSACTION',
        payload: error
      })
    }
  }
  async function setNewGoal(goal) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('http://localhost:3000/api/goal', goal, config)
      console.log(res)
      dispatch({
        type: 'SET_GOAL',
        payload: res.data
      })
    }  catch (error) {
      dispatch({
        type: 'ERROR_TRANSACTION',
        payload: error
      })
    }
  }
  async function resetTransactions() {
    try {
      const res = await axios.delete('http://localhost:3000/api/transactions')
      dispatch({
        type: 'RESET_TRANSACTIONS',
        payload: res.data
      })
    }  catch (error) {
      dispatch({
        type: 'ERROR_TRANSACTION',
        payload: error
      })
    }
  }
  const total = state.transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  //The GlobalContext.Provider will provide the state to be used in our children components
  // pass down the props to the children, have to specifically use the word 'value'
  return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction, getTransaction, error: state.error, loading: state.loading, goal: state.goal, setNewGoal, getGoal, total, resetTransactions}}> {children} </GlobalContext.Provider>)
}