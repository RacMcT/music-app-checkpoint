import React, { useReducer } from 'react';
import './App.css';
import UxLogin from './Components/UxLogin'
import UxNavBar from './Components/UxNavBar'
import Dashboard from './Components/Dashboard';

let App = () => {

  let reducer = (state, action) => {
    switch (action.type) {
      case 'signOn':
        return action.payload
      default: return state;
    };
  };

  let [signedIn, dispatch] = useReducer(reducer, false);

  return (
    <div>
      <UxNavBar />
      {signedIn ? <Dashboard /> : <UxLogin dispatch={dispatch} signedIn={signedIn} />}
    </div>
  )
};

export default App;