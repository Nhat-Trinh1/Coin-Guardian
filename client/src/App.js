import React from 'react';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {Goal} from './components/Goal'
import {History} from './components/History'
import {Add}  from './components/Add'
import { GlobalProvider } from './context/GlobalState'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

function App() {
  // all of the components inside global provider will have access to a global state
  return (  
    <GlobalProvider>
    <ThemeProvider>
      <div className ='app-container'>
      <Header />
      <div className = 'numbers'>
        <Balance />
        <Goal />
      </div>
      <History />
      <Add />
      </div>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;