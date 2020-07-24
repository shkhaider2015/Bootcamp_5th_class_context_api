import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent'
import CounterContext from './CounterContext'

function App() {
  let countState = useState(0)

  return (
    <CounterContext.Provider value={countState}>
      <h1>This is main App</h1>
      <Parent />
    </CounterContext.Provider>
  );
}

export default App;
