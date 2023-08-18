import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { GlobalContext } from '../context/GlobalState'
export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { resetTransactions } = useContext(GlobalContext)
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

  return (
    <div className ='header'>
    <h2>Mega Money Manager</h2>
    <div className = 'toggle'>     
    <button onClick={toggleTheme}>
    {theme === 'dark' ? "Light Mode" : `Dark Mode`}
    </button>
    <button onClick={resetTransactions}>
                Reset
    </button>
    </div>
    </div>
  )
}
